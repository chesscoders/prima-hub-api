import { checkFlowPermission } from '@middleware';
import { Edge, Node, Tab } from '@models';

const middlewares = [checkFlowPermission];
async function getDiagram(req, res) {
  try {
    /* --------------------------------------------------- FLOW */
    // We already have the Flow from the middleware
    const flow = req.flow;

    /* ------------------------------------------------- PAYLOAD */
    // 1. fetch nodes / edges / tabs in parallel
    const [rawNodes, rawEdges, rawTabs] = await Promise.all([
      Node.find({ flow: flow._id }).sort({ createdAt: 1 }).lean(),
      Edge.find({ flow: flow._id }).lean(),
      Tab.find({ flow: flow._id }).sort({ order: 1 }).lean(),
    ]);

    // 2. convert DB documents to the shape that the front-end
    //    finds convenient (legacy XYFlow but w/ Mongo IDs preserved)

    const nodes = rawNodes.map((n) => ({
      _id: n._id,
      id: n.legacyId, // legacy diagram ID
      data: { label: n.label }, // XYFlow needs a ‘data’ obj
      position: n.position,
      className: n.cssClass,
      link: n.link ?? null,
      permission: n.permission,
    }));

    const edges = rawEdges.map((e) => ({
      _id: e._id,
      id: `${e.source}-${e.target}`,
      source: e.source.toString(), // legacyId was string
      target: e.target.toString(),
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle,
      type: e.edgeType,
      permission: e.permission,
    }));

    const tabs = rawTabs.map((t) => ({
      _id: t._id,
      slug: t.slug,
      title: t.title,
      html: t.html, // client will render as innerHTML
      assets: t.assets,
      permission: t.permission,
      order: t.order,
    }));

    /* ------------------------------------------- SEND RESPONSE */
    return res.status(200).json({
      flow: {
        _id: flow._id,
        slug: flow.slug,
        title: flow.title,
        isPrimary: flow.isPrimary,
        permission: flow.permission,
      },
      nodes,
      edges,
      tabs,
    });
  } catch (err) {
    console.error(err);
  }
}
export default [...middlewares, getDiagram];
