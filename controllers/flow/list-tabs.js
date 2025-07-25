import { checkFlowPermission } from '@middleware';
import { Tabs } from '@models';

const middleware = [checkFlowPermission];
const controller = async (req, res) => {
  const { flow } = req.params;
  const documents = await Tabs.find({ flow });
  return res.status(200).json(documents);
};
export default [...middleware, controller];
