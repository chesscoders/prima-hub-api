import { error, serializeDiagramData } from '@functions';
import { Edge, Flow, Node, Tab } from '@models';

const middleware = [];
const controller = async (req, res) => {
  const flowDoc = await Flow.findOne({ isPrimary: true }).lean();
  if (!flowDoc) {
    throw error(404, 'Eroare! Flow-ul nu a fost găsit');
  }

  // pull sub-collections in parallel
  const [nodes, edges, tabs] = await Promise.all([
    Node.find({ flow: flowDoc._id }).lean(),

    Edge.find({ flow: flowDoc._id })
      .populate('source', 'legacyId')
      .populate('target', 'legacyId')
      .lean(),

    Tab.find({ flow: flowDoc._id })
      .sort({ order: 1 })
      .select('-flow -__v -createdAt -updatedAt')
      .lean(),
  ]);
  return res.status(200).json(serializeDiagramData(flowDoc, nodes, edges, tabs));
};
export default [...middleware, controller];
