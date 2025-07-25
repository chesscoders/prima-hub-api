/* eslint-disable no-console */
const path = require('path');
const fs = require('fs').promises;
const { connectToMongo } = require('express-goodies/functions');

const Tab = require('../models/tabs');
const slugify = require('slugify');

/* ------------------------------------------------------------------ */
const ROOT = path.resolve(__dirname, 'resources/Tabs'); // db/resources/Tabs
const STRIP_TAGS = /<[^>]+>/g;
const stripTags = (s = '') => s.replace(STRIP_TAGS, ' ').replace(/\s+/g, ' ').trim();

/* ------------------------------------------------------------------ */
(async function run() {
  await connectToMongo();

  /* comment–out if you don’t want to wipe everything on each run */
  await Tab.deleteMany({});

  /* -------------------- read every .js file in resources/Tabs -------------------- */
  const tabFiles = (await fs.readdir(ROOT)).filter((f) => f.endsWith('.js') && !f.startsWith('.'));

  for (const fileName of tabFiles) {
    const filePath = path.join(ROOT, fileName);
    const mod = require(filePath); // whatever the file exports

    /* ----------------------------------------------------------------
       Each file must supply:
         – an array of tabs
         – a string identifying which flow they belong to
       Accept two export styles for flexibility.
    ----------------------------------------------------------------- */
    let tabs, flowSlug;

    if (Array.isArray(mod)) {
      /* legacy style — exports only the array  → use file name as flow */
      tabs = mod;
      flowSlug = path.parse(fileName).name;
    } else if (mod && Array.isArray(mod.tabs)) {
      /* preferred style — { flowType, tabs } */
      tabs = mod.tabs;
      flowSlug = mod.flowType ?? mod.flowSlug ?? path.parse(fileName).name;
    } else {
      console.warn(`⚠︎  ${fileName} doesn’t export the expected shape – skipped`);
      continue;
    }

    /* -------------------- insert the tabs -------------------- */
    let order = 1;
    for (const t of tabs) {
      await Tab.create({
        flow: flowSlug, // now just a string
        slug: slugify(t.title, { lower: true, strict: true, locale: 'ro' }),
        order: order++,
        title: stripTags(t.title).slice(0, 120),
        html: t.html ?? '',
        assets: t.assets ?? [],
        permission: t.permission ?? null,
      });
    }

    console.log(`→ imported ${tabs.length} tab(s) for flow “${flowSlug}”`);
  }

  /* -------------------- summary & exit -------------------- */
  const totalTabs = await Tab.countDocuments();
  console.log(`✓ done  tabs:${totalTabs}`);
  process.exit(0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
