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
  {
    id: '5-6',
    source: '5',
    target: '6',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    markerEnd: { type: 'arrowclosed', color: '#000' },
    style: { stroke: '#000' },
  },
];

const nodePositions = [
  { id: '1', position: { x: 10, y: 45 } },
  { id: '2', position: { x: 264.4, y: 45 } },
  { id: '3', position: { x: 518.8, y: 50 } },
  { id: '4', position: { x: 773.35, y: 50 } },
  { id: '5', position: { x: 979.78, y: 45 } },
  { id: '6', position: { x: 1218.18, y: 45 } },
];

const getNodePosition = (id) => {
  const node = nodePositions.find((n) => n.id === id);
  return node ? node.position : { x: 0, y: 0 };
};

const getNodes = () => [
  {
    id: '1',
    position: getNodePosition('1'),
    data: { label: 'pregătirea materialelor predate' },
    className: 'achizitie-flow w-52 h-[50px]',
    showIndex: true,
  },
  {
    id: '2',
    position: getNodePosition('2'),
    data: { label: 'Întâlnirea Kick-off și Ședințele Recurente' },
    className: 'achizitie-flow w-52 h-[50px]',
    showIndex: true,
  },
  {
    id: '3',
    position: getNodePosition('3'),
    data: { label: 'programarea recepției' },
    className: 'achizitie-flow',
    showIndex: true,
  },
  {
    id: '4',
    position: getNodePosition('4'),
    data: { label: 'recepția tehnică' },
    className: 'achizitie-flow',
    showIndex: true,
  },
  {
    id: '5',
    position: getNodePosition('5'),
    data: { label: 'remedierea viciilor constatate' },
    className: 'achizitie-flow w-48 h-[50px]',
    showIndex: true,
  },
  {
    id: '6',
    position: getNodePosition('6'),
    data: { label: 'situații excepționale - refuzul recepției' },
    className: 'achizitie-flow w-52 h-[50px]',
    showIndex: true,
  },
];
const permission = '8'; // same flag you check on the page

/* ------------ nodes ------------------------------------------------ */
const getMiniNodes = () => [
  {
    id: '1',
    label: 'Recepția cu autoritățile',
    link: '/flow/intabulare', // deep-link to the main flow
    position: { x: 10, y: 15 },
    cssClass: 'mini-flow primary w-52',
    permission,
    showIndex: true,
  },
  {
    id: '2',
    label: 'Recepția cu clienții',
    link: null, // current page → no link
    position: { x: 250, y: 15 },
    cssClass: 'mini-flow primary w-44',
    permission,
    showIndex: true,
  },
  {
    id: '3',
    label: 'Remedieri în garanție',
    link: '/flow/remedieri-garantie',
    position: { x: 458, y: 15 },
    cssClass: 'mini-flow green w-52',
    permission,
    showIndex: true,
  },
  {
    id: '4',
    label: 'Semnarea contractelor CVC',
    link: null,
    position: { x: 210, y: 80 },
    cssClass: 'mini-flow primary w-64',
    permission,
    showIndex: true,
  },
];

/* ------------ edges ------------------------------------------------ */
const defaultEdgeStyle = { stroke: '#374151', strokeWidth: 1.3 };
const defaultMarker = { type: 'arrow', color: '#374151', width: 13, height: 13 };

const getMiniEdges = () => [
  {
    id: '1-2',
    source: '1',
    target: '2',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    style: defaultEdgeStyle,
    markerEnd: defaultMarker,
    permission,
    showIndex: true,
  },
  {
    id: '2-3',
    source: '2',
    target: '3',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'straight',
    style: defaultEdgeStyle,
    markerEnd: defaultMarker,
    permission,
    showIndex: true,
  },
  {
    id: '2-4',
    source: '2',
    target: '4',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    type: 'straight',
    style: defaultEdgeStyle,
    markerEnd: defaultMarker,
    permission,
    showIndex: true,
  },
];
module.exports = { getNodes, getEdges, getMiniEdges, getMiniNodes, permission: '8' };
