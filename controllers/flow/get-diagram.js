import { serializeDiagramData } from '@functions';
import { Edge, Flow, Node } from '@models';

const middlewares = [];
async function getDiagram(req, res) {
  try {
    const flow = await Flow.findOne({ slug: req.params.flowId }).lean();
    if (!flow) {
      return res.status(404).json({ message: 'Flow not found' });
    }

    /* ------------------------------------------------- PAYLOAD */
    // 1. fetch nodes / edges / tabs in parallel
    const [rawNodes, rawEdges] = await Promise.all([
      Node.find({ flow: flow._id }).sort({ createdAt: 1 }).lean(),
      Edge.find({ flow: flow._id }).lean(),
    ]);

    // 2. convert DB documents to the shape that the front-end
    //    finds convenient (legacy XYFlow but w/ Mongo IDs preserved)

    /* ------------------------------------------- SEND RESPONSE */
    return res.status(200).json(serializeDiagramData(flow, rawNodes, rawEdges));
  } catch (err) {
    console.error(err);
  }
}
export default [...middlewares, getDiagram];
