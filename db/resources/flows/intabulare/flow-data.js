// resources/flows/intabulare/raw-data.js
// ---------------------------------------------------------------
// Plain JSON-ready data – NO React, NO XY-Flow imports.
//
// • getNodes / getEdges          → 28-step “Recepție & Intabulare”
// • getMiniNodes / getMiniEdges  → context mini-map
// • permission                   → ACL tag (“intabulare”)
// ---------------------------------------------------------------
const permission = 'intabulare';

/* ------------------------------------------------------------------
 * shared edge styling – same defaults you use client-side
 * ---------------------------------------------------------------- */
const defaultEdgeStyle = { stroke: '#000' };
const defaultMarker = { type: 'arrowclosed', color: '#000' };

function addEdge({
  id,
  source,
  target,
  sourceHandle = 'right',
  targetHandle = 'left',
  type = 'straight',
  style = defaultEdgeStyle,
  markerEnd = defaultMarker,
}) {
  return {
    id,
    source,
    target,
    sourceHandle,
    targetHandle,
    type,
    style,
    markerEnd,
    permission,
  };
}

/* =================================================================
 * 1) FULL 28-STEP DIAGRAM
 * ================================================================= */
const getNodes = () => [
  {
    id: '1',
    label: 'Anunțare finalizare lucrări',
    position: { x: 247, y: 25 },
    cssClass: 'receptie-flow',
    permission,
  },
  {
    id: '2',
    label: 'Regularizare taxe + Obținere adeverință ISC',
    position: { x: 185, y: 80 },
    cssClass: 'receptie-flow',
    permission,
  },
  {
    id: '3',
    label: 'Convocare comisie recepție',
    position: { x: 249, y: 135 },
    cssClass: 'receptie-flow',
    permission,
  },
  {
    id: '4',
    label: 'Pregătire șantier',
    position: { x: 640, y: 25 },
    cssClass: 'receptie-flow',
    permission,
  },
  {
    id: '5',
    label: 'Pregătire documentație',
    position: { x: 875, y: 25 },
    cssClass: 'receptie-flow',
    permission,
  },
  {
    id: '6',
    label: 'Recepție cu autoritățile',
    position: { x: 614, y: 200 },
    cssClass: 'receptie-flow',
    permission,
  },
  {
    id: '7',
    label: 'Obținere CAECC',
    position: { x: 195, y: 265 },
    cssClass: 'receptie-flow',
    permission,
  },
  {
    id: '8',
    label: 'Înregistrare clădire la DITL',
    position: { x: 360, y: 330 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '9',
    label: 'Obținere acord bancă',
    position: { x: 623, y: 330 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '10',
    label: 'Verificare documentație cadastrală',
    position: { x: 845, y: 330 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '11',
    label: 'Intabularea clădirii',
    position: { x: 510, y: 395 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '12',
    label: 'Actualizare cadastru - construcție',
    position: { x: 185, y: 460 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '13',
    label: 'Întocmire poliță de asigurare',
    position: { x: 735, y: 460 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '14',
    label: 'Dezmembrare locuri de parcare',
    position: { x: 456.7, y: 515 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '15',
    label: 'Obținere acord bancă',
    position: { x: 775, y: 515 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '16',
    label: 'Radiere sarcini',
    position: { x: 1005, y: 515 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '17',
    label: 'Dezmembrare teren la OCPI',
    position: { x: 956.7, y: 570 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '18',
    label: 'Dezmembrare prin act-adițional',
    position: { x: 625, y: 635 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '19',
    label: 'Înscriere act dezmembrare la DIT',
    position: { x: 932.4, y: 635 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '20',
    label: 'Obținere certificat lot clădire',
    position: { x: 940.5, y: 690 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '21',
    label: 'Apartamentare clădire',
    position: { x: 491.4, y: 745 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '22',
    label: 'Obținere acord bancă',
    position: { x: 741, y: 745 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '23',
    label: 'Propunere apartamentare la OCPI',
    position: { x: 970, y: 745 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '24',
    label: 'Semnare acte notariale + Obținere intabulare',
    position: { x: 920.6, y: 800 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '25',
    label: 'Înregistrare la DITL',
    position: { x: 1026.2, y: 855 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '26',
    label: 'Obținere acord bancă înstrăinare',
    position: { x: 676, y: 855 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '27',
    label: 'Obținere certificate finale individuale',
    position: { x: 226, y: 855 },
    cssClass: 'intabulare-flow',
    permission,
  },
  {
    id: '28',
    label: 'Vânzare apartamente',
    position: { x: 503, y: 920 },
    cssClass: 'intabulare-flow',
    permission,
  },
];

const getEdges = () => [
  /* first column – vertical */
  addEdge({
    id: '1-2',
    source: '1',
    target: '2',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straight',
  }),
  addEdge({
    id: '2-3',
    source: '2',
    target: '3',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straight',
  }),
  addEdge({
    id: '3-6',
    source: '3',
    target: '6',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'short-step',
  }),

  /* top helpers into 6 */
  addEdge({ id: '4-6', source: '4', target: '6', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({
    id: '5-6',
    source: '5',
    target: '6',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'short-step',
  }),

  /* down to CAECC */
  addEdge({ id: '6-7', source: '6', target: '7', sourceHandle: 'bottom', targetHandle: 'top' }),

  /* CAECC → Intabulare clădire  (multi-branch) */
  addEdge({ id: '7-11', source: '7', target: '11', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '8-11', source: '8', target: '11', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '9-11', source: '9', target: '11', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '10-11', source: '10', target: '11', sourceHandle: 'bottom', targetHandle: 'top' }),

  /* 11 → 12/13/14 */
  addEdge({ id: '11-12', source: '11', target: '12', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '11-13', source: '11', target: '13', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '11-14', source: '11', target: '14', sourceHandle: 'bottom', targetHandle: 'top' }),

  /* right-hand branch: 14 → 15 → 16 → 17 */
  addEdge({ id: '14-15', source: '14', target: '15', sourceHandle: 'right', targetHandle: 'left' }),
  addEdge({ id: '15-16', source: '15', target: '16', sourceHandle: 'right', targetHandle: 'left' }),
  addEdge({ id: '16-17', source: '16', target: '17', sourceHandle: 'bottom', targetHandle: 'top' }),

  /* 17 splits to 18 & 19 → 20 */
  addEdge({ id: '17-18', source: '17', target: '18', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '17-19', source: '17', target: '19', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '19-20', source: '19', target: '20', sourceHandle: 'bottom', targetHandle: 'top' }),

  /* gather into apartamentare */
  addEdge({
    id: '18-21',
    source: '18',
    target: '21',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'step',
  }),
  addEdge({
    id: '20-21',
    source: '20',
    target: '21',
    sourceHandle: 'left',
    targetHandle: 'top',
    type: 'step',
  }),

  /* rightwards run to 24-25 */
  addEdge({ id: '21-22', source: '21', target: '22', sourceHandle: 'right', targetHandle: 'left' }),
  addEdge({ id: '22-23', source: '22', target: '23', sourceHandle: 'right', targetHandle: 'left' }),
  addEdge({ id: '23-24', source: '23', target: '24', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '24-25', source: '24', target: '25', sourceHandle: 'bottom', targetHandle: 'top' }),

  /* finish: converge on 28 */
  addEdge({ id: '25-28', source: '25', target: '28', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '26-28', source: '26', target: '28', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '27-28', source: '27', target: '28', sourceHandle: 'bottom', targetHandle: 'top' }),

  /* extra direct links */
  addEdge({ id: '14-21', source: '14', target: '21', sourceHandle: 'bottom', targetHandle: 'top' }),
  addEdge({ id: '21-28', source: '21', target: '28', sourceHandle: 'bottom', targetHandle: 'top' }),
];

/* =================================================================
 * 2) MINI-MAP
 * ================================================================= */
const getMiniNodes = () => [
  // only the nodes visible in the small context map
  {
    id: '6',
    label: 'Construcția',
    position: { x: 10, y: 70 },
    cssClass: 'mini-flow primary w-[135px]',
    permission,
  },
  {
    id: '7',
    label: 'Recepția cu autoritățile',
    position: { x: 180, y: 70 },
    cssClass: 'mini-flow primary w-52',
    permission,
  },
  {
    id: '8',
    label: 'Recepția cu clienții',
    position: { x: 635, y: 70 },
    cssClass: 'mini-flow primary w-44',
    permission,
  },
  {
    id: 'c',
    label: 'Autorizarea SSI și AP. CIV',
    position: { x: 310, y: 10 },
    cssClass: 'mini-flow green w-60',
    permission,
  },
  {
    id: 'utilitati',
    label: 'BRANȘAMENTE LA UTILITĂȚI',
    position: { x: 10, y: 130 },
    cssClass: 'mini-flow orange w-max',
    permission,
  },
  {
    id: 'intabulare',
    label: 'INTABULAREA APARTAMENTELOR',
    position: { x: 310, y: 130 },
    cssClass: 'mini-flow primary w-64',
    permission,
  },
  {
    id: 'cvc',
    label: 'Semnarea contractelor CVC',
    position: { x: 595, y: 130 },
    cssClass: 'mini-flow primary w-64',
    permission,
  },
];

const getMiniEdges = () => [
  addEdge({ id: '6-7', source: '6', target: '7', type: 'straight' }),
  addEdge({ id: '7-8', source: '7', target: '8', type: 'straight' }),
  addEdge({
    id: 'utilitati-7',
    source: 'utilitati',
    target: '7',
    sourceHandle: 'right',
    targetHandle: 'custom-bottom',
    type: 'step',
  }),
  addEdge({
    id: '7-c',
    source: '7',
    target: 'c',
    sourceHandle: 'top',
    targetHandle: 'left',
    type: 'step',
  }),
  addEdge({
    id: '7-intabulare',
    source: '7',
    target: 'intabulare',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'step',
  }),
  addEdge({
    id: 'intabulare-cvc',
    source: 'intabulare',
    target: 'cvc',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
  }),
  addEdge({
    id: '8-cvc',
    source: '8',
    target: 'cvc',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straight',
  }),

  // Optional: keep the “setupmrk → customer” edge only
  // if you decide to add those two mini-nodes later.
  // addEdge({ id:'setupmrk-customer', source:'setupmrk', target:'customer', sourceHandle:'bottom', targetHandle:'left', type:'step' }),
];

/* ------------------------------------------------------------------ */
module.exports = {
  permission,
  // full diagram
  getNodes,
  getEdges,
  // mini-map
  getMiniNodes,
  getMiniEdges,
};
