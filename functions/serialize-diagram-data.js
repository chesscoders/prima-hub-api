const stripTags = (s = '') =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/* ---------- nodes ---------------------------------------------------- */
function node(doc) {
  return {
    id: doc.legacyId,
    position: doc.position,
    data: { label: stripTags(doc.label) },
    className: doc.cssClass || '',
    link: doc.link || null,
  };
}

/* ---------- edges ---------------------------------------------------- */
function edge(doc) {
  // `populate('source', 'legacyId')` makes .source an object with legacyId
  const src = doc.source.legacyId || doc.source;
  const trg = doc.target.legacyId || doc.target;

  return {
    id: `${src}-${trg}`,
    source: src,
    target: trg,
    sourceHandle: doc.sourceHandle || undefined,
    targetHandle: doc.targetHandle || undefined,
    type: doc.edgeType || 'straight',
  };
}

/* ---------- entire flow payload ------------------------------------- */
function serializeDiagramData(flowDoc, nodes = [], edges = [], tabs = []) {
  return {
    id: flowDoc._id,
    slug: flowDoc.slug,
    title: flowDoc.title,
    permission: flowDoc.permission ?? null, // ← keep ACL handy
    isPrimary: !!flowDoc.isPrimary,
    nodes: nodes.map(node),
    edges: edges.map(edge),
    tabs, // tabs already plain JSON (see step 4)
  };
}

export default serializeDiagramData;
