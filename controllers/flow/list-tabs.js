import { checkFlowPermission } from '@middleware';
import { Tab } from '@models';

const middleware = [checkFlowPermission];
const controller = async (req, res) => {
  const documents = await Tab.find({ flow: req.flow._id }).paginate(req.query);
  return res.status(200).json(documents);
};
export default [...middleware, controller];
