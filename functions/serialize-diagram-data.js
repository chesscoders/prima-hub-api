// db/serializers/diagram.js  (CommonJS, adjust path to taste)
const stripTags = (s = '') =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/* ------------------------------------------------------------------ *
 * shared edge styling – same values you used on the client           *
 * ------------------------------------------------------------------ */
const defaultEdgeStyle = { stroke: '#374151', strokeWidth: 1.3 };
const defaultMarker = { type: 'arrow', color: '#374151', width: 13, height: 13 };

/* ------------------------------------------------------------------ *
 * node helper                                                        *
 * ------------------------------------------------------------------ */
function serialiseNode(doc, flowSlug) {
  const isPrimary = (doc.cssClass || '').includes('primary'); // legacy rule
  return {
    id: doc.legacyId,
    type: 'flow', // handled by <FlowNode>
    position: doc.position || { x: 0, y: 0 }, // safety default
    className: doc.cssClass || '',

    data: {
      label: stripTags(doc.label), // keep text only
      href: isPrimary ? `/flow/${flowSlug}` : null,
      cssClass: `flow-node ${doc.cssClass || ''}`,
    },
  };
}

/* ------------------------------------------------------------------ *
 * edge helper                                                        *
 * ------------------------------------------------------------------ */
function serialiseEdge(doc) {
  const src = doc.source.legacyId || doc.source; // populated or raw
  const trg = doc.target.legacyId || doc.target;

  return {
    id: `${src}-${trg}`,
    source: src,
    target: trg,
    sourceHandle: doc.sourceHandle || undefined,
    targetHandle: doc.targetHandle || undefined,
    type: doc.edgeType || 'straight',
    style: defaultEdgeStyle,
    markerEnd: defaultMarker,
  };
}

/* ------------------------------------------------------------------ *
 * main export – creates the payload sent to the client               *
 * ------------------------------------------------------------------ */
function serialiseDiagramData(flowDoc, nodes = [], edges = [], tabs = []) {
  return {
    id: flowDoc._id,
    slug: flowDoc.slug,
    title: flowDoc.title,
    permission: flowDoc.permission ?? null,
    isPrimary: !!flowDoc.isPrimary,

    nodes: nodes.map((n) => serialiseNode(n, flowDoc.slug)),
    edges: edges.map(serialiseEdge),
    tabs, // already lean plain JSON
  };
}
export default serialiseDiagramData;
