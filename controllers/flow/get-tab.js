import { error } from '@functions';
import { checkFlowPermission } from '@middleware';
import { Tab } from '@models';

const middleware = [checkFlowPermission];
const controller = async (req, res) => {
  const { tabId } = req.params;
  const documents = await Tab.findOne({ flow: req.flow._id, _id: tabId });
  if (!documents) {
    throw error(404, 'Eroare! Tab-ul nu a fost găsit');
  }
  return res.status(200).json(documents);
};
export default [...middleware, controller];
