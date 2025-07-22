import { Flow } from '@models';

const middleware = [];
const controller = async (req, res) => {
  const documents = await Flow.find().paginate(req.query);
  return res.status(200).json(documents);
};
export default [...middleware, controller];
