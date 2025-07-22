/* eslint-disable no-console */
const path = require('path');
const fs = require('fs').promises;
const { connectToMongo } = require('express-goodies/functions');

const Flow = require('../../models/flow');
const Node = require('../../models/node');
const Edge = require('../../models/edge');
const Tab = require('../../models/tab');

const slugify = require('slugify');

/* ------------------------------------------------------------------ */
const ROOT = path.resolve(__dirname, 'flows'); // db/resources/flows
const STRIP_TAGS = /<[^>]+>/g;
const stripTags = (s = '') => s.replace(STRIP_TAGS, ' ').replace(/\s+/g, ' ').trim();

/* ------------------------------------------------------------------ */
(async function run() {
  await connectToMongo();

  /* optional – start from a clean slate */
  await Promise.all([
    Flow.deleteMany({}),
    Node.deleteMany({}),
    Edge.deleteMany({}),
    Tab.deleteMany({}),
  ]);

  const flowDirs = (await fs.readdir(ROOT)).filter((d) => !d.startsWith('.'));

  for (const slug of flowDirs) {
    /* ---------- FLOW ------------------------------------------------ */
    const modPath = path.join(ROOT, slug, 'flow-data.js');
    const isPrimary = slug == 'prima-flow' ? true : false;
    const {
      getNodes,
      getEdges,
      getMiniEdges,
      getMiniNodes,
      permission: flowPerm,
      title,
      overlay,
    } = require(modPath);

    /* fallback to empty arrays when helpers are missing */
    const miniNodes = typeof getMiniNodes === 'function' ? getMiniNodes() : [];
    const miniEdges = typeof getMiniEdges === 'function' ? getMiniEdges() : [];

    const flowDoc = await Flow.create({
      slug,
      title: title ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      isPrimary,
      permission: flowPerm ?? null,
      overlay,

      /* always store the field, even if empty */
      miniMap: { nodes: miniNodes, edges: miniEdges },
    });
    /* ---------- NODES ---------------------------------------------- */
    const legacyNodes = await getNodes();
    const idMap = new Map(); // legacyId ➜ Mongo _id
    const showIndex = isPrimary ? false : true;
    const nodeDocs = await Node.insertMany(
      legacyNodes.map((n) => ({
        flow: flowDoc._id,
        legacyId: n.id ?? n.legacyId ?? null,
        label: stripTags(n.label ?? n.data?.label ?? ''),
        position: n.position ?? { x: 0, y: 0 },
        cssClass: n.cssClass ?? n.className ?? '',
        link: n.link ?? n.url ?? null,
        permission: n.permission ?? flowPerm ?? null,
        showIndex,
      }))
    );
    nodeDocs.forEach((d) => idMap.set(d.legacyId, d._id));

    /* ---------- EDGES ---------------------------------------------- */
    const legacyEdges = await getEdges();
    await Edge.insertMany(
      legacyEdges.map((e) => ({
        flow: flowDoc._id,
        source: idMap.get(e.source),
        target: idMap.get(e.target),
        sourceHandle: e.sourceHandle ?? null,
        sourceHandleCss: e.sourceHandleCss,
        targetHandleCss: e.targetHandleCss,
        targetHandle: e.targetHandle ?? null,
        edgeType: e.type ?? 'straight',
        permission: e.permission ?? flowPerm ?? null,
      }))
    );

    /* ---------- TABS  (optional) ----------------------------------- */
    try {
      const tabFile = path.join(ROOT, slug, 'tabs.js');
      const tabArr = require(tabFile); // exports plain array

      let order = 1;
      for (const t of tabArr) {
        await Tab.create({
          flow: flowDoc._id,
          slug: slugify(t.title, { lower: true, strict: true, locale: 'ro' }),
          order: order++,
          title: stripTags(t.title).slice(0, 120),
          html: t.html ?? '',
          assets: t.assets ?? [],
          permission: t.permission ?? flowPerm ?? null,
        });
      }
    } catch (err) {
      if (err.code !== 'ENOENT') console.error(err);
    }

    console.log(`→ imported flow “${slug}”`);
  }

  /* ---------- summary ---------------------------------------------- */
  const [flows, nodes, edges, tabs] = await Promise.all([
    Flow.countDocuments(),
    Node.countDocuments(),
    Edge.countDocuments(),
    Tab.countDocuments(),
  ]);
  console.log(`✓ done  flows:${flows}  nodes:${nodes}  edges:${edges}  tabs:${tabs}`);
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
