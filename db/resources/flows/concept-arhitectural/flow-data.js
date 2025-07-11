const permission = 'concept';

const defaultEdgeStyle = { stroke: '#000' }; // black line
const defaultMarker = { type: 'arrowclosed', color: '#000' };

const addEdge = ({
  id,
  source,
  target,
  sourceHandle = 'right',
  targetHandle = 'left',
  type = 'straight',
  style = defaultEdgeStyle,
  markerEnd = defaultMarker,
}) => ({
  id,
  source,
  target,
  sourceHandle,
  targetHandle,
  type,
  style,
  markerEnd,
  permission,
});

/* =================================================================
 * 1) FULL 5-STEP DIAGRAM
 * ================================================================= */
const nodePositions = [
  { id: '1', position: { x: 5, y: 50 } },
  { id: '2', position: { x: 228, y: 50 } },
  { id: '3', position: { x: 513, y: 50 } },
  { id: '4', position: { x: 967, y: 50 } },
  { id: '5', position: { x: 1195, y: 50 } },
];
const pos = (id) => nodePositions.find((n) => n.id === id)?.position ?? { x: 0, y: 0 };

const getNodes = () => [
  {
    id: '1',
    position: pos('1'),
    data: { label: 'Inițierea concursului' },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '2',
    position: pos('2'),
    data: { label: 'Redactarea temei de concurs' },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '3',
    position: pos('3'),
    data: { label: 'Participarea arhitecților și predarea conceptelor' },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '4',
    position: pos('4'),
    data: { label: 'Votarea propunerilor' },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '5',
    position: pos('5'),
    data: { label: 'Anunțarea câștigătorului' },
    cssClass: 'achizitie-flow',
    permission,
  },
];

const getEdges = () => [
  addEdge({ id: '1-2', source: '1', target: '2' }),
  addEdge({ id: '2-3', source: '2', target: '3' }),
  addEdge({ id: '3-4', source: '3', target: '4' }),
  addEdge({ id: '4-5', source: '4', target: '5' }),
];

/* =================================================================
 * 2) MINI-MAP   (context around this flow)
 * ================================================================= */
const getMiniNodes = () => [
  {
    id: 'achizitie',
    label: 'Achiziție Teren',
    link: '/flow/achizitie-teren',
    position: { x: 10, y: 20 },
    cssClass: 'mini-flow primary w-40 h-[35px]',
    permission,
  },
  {
    id: 'concept',
    label: 'Concept Arhitectural',
    link: '/flow/concept-arhitectural',
    position: { x: 200, y: 20 },
    cssClass: 'mini-flow primary w-[210px] h-[35px]',
    permission,
  },
  {
    id: 'urbanisticaa',
    label: 'Autorizare Urbanistică',
    link: null,
    position: { x: 74, y: 70 },
    cssClass: 'mini-flow green w-52 h-[35px]',
    permission,
  },
  {
    id: 'dtac',
    label: 'Proiectare DTAC',
    link: '/flow/proiectare-dtac',
    position: { x: 439, y: 20 },
    cssClass: 'mini-flow primary w-40 h-[35px]',
    permission,
  },
];

const getMiniEdges = () => [
  // achizitie ──→ concept
  addEdge({
    id: 'achizitie-concept',
    source: 'achizitie',
    target: 'concept',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
  }),

  // achizitie ↓ step → urbanisticaa → concept
  addEdge({
    id: 'achizitie-urbanisticaa',
    source: 'achizitie',
    target: 'urbanisticaa',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'step',
  }),
  addEdge({
    id: 'urbanisticaa-concept',
    source: 'urbanisticaa',
    target: 'concept',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'step',
  }),

  // concept ──→ dtac
  addEdge({
    id: 'concept-dtac',
    source: 'concept',
    target: 'dtac',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
  }),
];

/* ------------------------------------------------------------------ */
module.exports = {
  permission,
  // full flow
  getNodes,
  getEdges,
  // mini-map
  getMiniNodes,
  getMiniEdges,
};
