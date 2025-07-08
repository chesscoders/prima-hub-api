// resources/flows/achizitie-teren/raw-data.js
// ---------------------------------------------------------------
// Plain JSON‑ready data for the “Achiziție Teren” mini‑flow.
// No React, no XYFlow imports. Everything the server needs to seed
// Node & Edge collections. Permission for this flow is “achizitie”.
const permission = 'achizitie';
const getNodes = () => [
  {
    id: '1',
    label: 'Analiza de business',
    link: null, // no deep‑link page yet
    position: { x: 20, y: 50 },
    cssClass: 'achizitie-flow',
    permission: 'achizitie',
  },
  {
    id: '2',
    label: 'Securizarea terenului',
    link: null,
    position: { x: 260, y: 50 },
    cssClass: 'achizitie-flow',
    permission: 'achizitie',
  },
  {
    id: '3',
    label: 'Intocmirea DD + Analiza riscurilor',
    link: null,
    position: { x: 522.6, y: 50 },
    cssClass: 'achizitie-flow',
    permission: 'achizitie',
  },
  {
    id: '4',
    label: 'Analizarea rapoartelor întocmite',
    link: null,
    position: { x: 882.4, y: 50 },
    cssClass: 'achizitie-flow',
    permission: 'achizitie',
  },
  {
    id: '5',
    label: 'Achiziția terenului',
    link: null,
    position: { x: 1242, y: 50 },
    cssClass: 'achizitie-flow',
    permission: 'achizitie',
  },
];

const getEdges = () => [
  {
    id: '1-2',
    source: '1',
    target: '2',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    permission: 'achizitie',
  },
  {
    id: '2-3',
    source: '2',
    target: '3',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    permission: 'achizitie',
  },
  {
    id: '3-4',
    source: '3',
    target: '4',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    permission: 'achizitie',
  },
  {
    id: '4-5',
    source: '4',
    target: '5',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    permission: 'achizitie',
  },
];
module.exports = { getNodes, getEdges, permission };
