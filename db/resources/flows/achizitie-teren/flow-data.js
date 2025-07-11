// resources/flows/achizitie-teren/raw-data.js
// ---------------------------------------------------------------
// Plain JSON-ready data for the “Achiziția terenului” flow.
// No React, no XYFlow imports – just the objects the seeder
// pushes to Mongo.
//
// • getNodes / getEdges      → full diagram (5 steps)
// • getMiniNodes / getMiniEdges → tiny mini-map shown on top
// • permission               → ACL tag stored on every record
//-----------------------------------------------------------------
const permission = 'achizitie';

/* ------------------------------------------------------------------
 * shared styling – keep exactly the same values you already use
 * ---------------------------------------------------------------- */
const defaultEdgeStyle = { stroke: '#374151', strokeWidth: 1.3 };
const defaultMarker = { type: 'arrow', color: '#374151', width: 13, height: 13 };

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
const getNodes = () => [
  {
    id: '1',
    label: 'Analiza de business',
    link: null,
    position: { x: 20, y: 50 },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '2',
    label: 'Securizarea terenului',
    link: null,
    position: { x: 260, y: 50 },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '3',
    label: 'Întocmirea DD + Analiza riscurilor',
    link: null,
    position: { x: 522.6, y: 50 },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '4',
    label: 'Analizarea rapoartelor întocmite',
    link: null,
    position: { x: 882.4, y: 50 },
    cssClass: 'achizitie-flow',
    permission,
  },
  {
    id: '5',
    label: 'Achiziția terenului',
    link: null,
    position: { x: 1242, y: 50 },
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
 * 2) MINI-MAP  (only the surrounding context)
 * ================================================================= */
const getMiniNodes = () => [
  {
    id: 'achizitie',
    label: 'Achiziția Terenului',
    link: '/flow/achizitie-teren',
    position: { x: 10, y: 20 },
    cssClass: 'mini-flow primary w-48 h-[35px]',
    permission,
  },
  {
    id: 'concept',
    label: 'Concept Arhitectural',
    link: '/flow/concept-arhitectural',
    position: { x: 230, y: 20 },
    cssClass: 'mini-flow primary w-56 h-[35px]',
    permission,
  },
  {
    id: 'urbanisticaa',
    label: 'Autorizarea Urbanistică',
    link: null,
    position: { x: 100, y: 70 },
    cssClass: 'mini-flow green w-56 h-[35px]',
    permission,
  },
];

const getMiniEdges = () => [
  addEdge({
    id: 'achizitie-concept',
    source: 'achizitie',
    target: 'concept',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
  }),
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
