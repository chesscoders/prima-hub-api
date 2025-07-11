const stripTags = (s = '') =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const defaultEdgeStyle = { stroke: '#374151', strokeWidth: 1.3 };
const defaultMarker = { type: 'arrow', color: '#374151', width: 13, height: 13 };

/* ------------------------------------------------------------------ */
/* 1.  COLLECT  HANDLE  → CSS  (now aware of Mongo IDs)               */
/* ------------------------------------------------------------------ */
function collectHandles(edgeArr = [], idMap = new Map()) {
  /** @type {Map<string,{source:Map<string,string|null>, target:Map<string,string|null>}>} */
  const map = new Map();

  const ensure = (id) => {
    if (!map.has(id)) map.set(id, { source: new Map(), target: new Map() });
    return map.get(id);
  };

  for (const e of edgeArr) {
    const rawSrc = e.source?.legacyId ?? e.source;
    const rawTrg = e.target?.legacyId ?? e.target;

    /* translate ObjectId → legacyId if needed */
    const srcId = idMap.get(String(rawSrc)) ?? rawSrc;
    const trgId = idMap.get(String(rawTrg)) ?? rawTrg;

    const srcH = e.sourceHandle || 'right';
    const trgH = e.targetHandle || 'left';

    ensure(srcId).source.set(srcH, e.sourceHandleCss ?? null);
    ensure(trgId).target.set(trgH, e.targetHandleCss ?? null);
  }
  return map;
}

/* ------------------------------------------------------------------ */
/* 2.  NODE  SERIALISER                                               */
/* ------------------------------------------------------------------ */
function serialiseNode(doc, flowSlug, handleMap) {
  const id = doc.legacyId ?? doc.id;
  const handles = handleMap.get(id) ?? { source: new Map(), target: new Map() };

  const toArr = (m) => Array.from(m.entries()).map(([hid, css]) => ({ id: hid, css }));

  return {
    id,
    type: 'flow',
    position: doc.position || { x: 0, y: 0 },
    className: doc.cssClass ?? doc.className ?? '',
    data: {
      label: stripTags(doc.label),
      href: doc.link ?? null,
      cssClass: `flow-node ${doc.cssClass ?? doc.className ?? ''}`,
      handles: {
        source: toArr(handles.source),
        target: toArr(handles.target),
      },
    },
  };
}

/* ------------------------------------------------------------------ */
/* 3.  EDGE  SERIALISER (always outputs legacy ids)                   */
/* ------------------------------------------------------------------ */
function serialiseEdge(doc, idMap) {
  const rawSrc = doc.source?.legacyId ?? doc.source;
  const rawTrg = doc.target?.legacyId ?? doc.target;

  const source = idMap.get(String(rawSrc)) ?? rawSrc;
  const target = idMap.get(String(rawTrg)) ?? rawTrg;

  return {
    id: `${source}-${target}`,
    source,
    target,
    sourceHandle: doc.sourceHandle || undefined,
    targetHandle: doc.targetHandle || undefined,
    sourceHandleCss: doc.sourceHandleCss || undefined,
    targetHandleCss: doc.targetHandleCss || undefined,
    type: doc.edgeType || doc.type || 'straight',
    style: doc.style || defaultEdgeStyle,
    markerEnd: doc.markerEnd || defaultMarker,
  };
}

/* ------------------------------------------------------------------ */
/* 4.  MAIN  EXPORT                                                   */
/* ------------------------------------------------------------------ */
function serialiseDiagramData(flowDoc, nodeDocs = [], edgeDocs = [], tabs = []) {
  /* ↔ maps Mongo _id  → legacyId (string) once -------------------- */
  const idMap = new Map(nodeDocs.map((n) => [String(n._id), n.legacyId]));

  /* build handle maps */
  const mainHandleMap = collectHandles(edgeDocs, idMap);

  const miniRaw = flowDoc.miniMap || {};
  const miniEdgesRaw = miniRaw.edges || [];
  const miniNodesRaw = miniRaw.nodes || [];
  const miniHandleMap = collectHandles(miniEdgesRaw); // mini-map already uses legacy ids

  return {
    id: flowDoc._id,
    slug: flowDoc.slug,
    title: flowDoc.title,
    permission: flowDoc.permission ?? null,
    isPrimary: !!flowDoc.isPrimary,

    nodes: nodeDocs.map((n) => serialiseNode(n, flowDoc.slug, mainHandleMap)),
    edges: edgeDocs.map((e) => serialiseEdge(e, idMap)),

    miniMap: {
      nodes: miniNodesRaw.map((n) => serialiseNode(n, flowDoc.slug, miniHandleMap)),
      edges: miniEdgesRaw.map((e) => serialiseEdge(e, new Map() /* mini already ok */)),
    },

    tabs,
  };
}

module.exports = serialiseDiagramData;
