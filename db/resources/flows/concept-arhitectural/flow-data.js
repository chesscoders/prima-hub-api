const getEdges = () => [
  {
    id: '1-2',
    source: '1',
    target: '2',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    markerEnd: { type: 'arrowclosed', color: '#000' },
    style: { stroke: '#000' },
  },
  {
    id: '2-3',
    source: '2',
    target: '3',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    markerEnd: { type: 'arrowclosed', color: '#000' },
    style: { stroke: '#000' },
  },
  {
    id: '3-4',
    source: '3',
    target: '4',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    markerEnd: { type: 'arrowclosed', color: '#000' },
    style: { stroke: '#000' },
  },
  {
    id: '4-5',
    source: '4',
    target: '5',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    markerEnd: { type: 'arrowclosed', color: '#000' },
    style: { stroke: '#000' },
  },
];

const nodePositions = [
  { id: '1', position: { x: 5, y: 50 } },
  { id: '2', position: { x: 228, y: 50 } },
  { id: '3', position: { x: 513, y: 50 } },
  { id: '4', position: { x: 967, y: 50 } },
  { id: '5', position: { x: 1195, y: 50 } },
];

const getNodePosition = (id) => {
  const node = nodePositions.find((n) => n.id === id);
  return node ? node.position : { x: 0, y: 0 };
};

const getNodes = () => [
  {
    id: '1',
    position: getNodePosition('1'),
    data: { label: 'Inițierea concursului' },
    className: 'achizitie-flow',
  },
  {
    id: '2',
    position: getNodePosition('2'),
    data: { label: 'Redactarea temei de concurs' },
    className: 'achizitie-flow',
  },
  {
    id: '3',
    position: getNodePosition('3'),
    data: { label: 'Participarea arhitecților și predarea conceptelor' },
    className: 'achizitie-flow',
  },
  {
    id: '4',
    position: getNodePosition('4'),
    data: { label: 'Votarea propunerilor' },
    className: 'achizitie-flow',
  },
  {
    id: '5',
    position: getNodePosition('5'),
    data: { label: 'Anunțarea câștigătorului' },
    className: 'achizitie-flow',
  },
];

module.exports = { getNodes, getEdges,permission:'concept' };
