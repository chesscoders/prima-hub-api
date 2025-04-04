import { Todo } from '@examples/models';
import { error } from '@functions';

export default async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const todo = await Todo.findOne({ _id: id, 'identity._id': me });
  if (!todo) {
    throw error(404, 'Resource not found');
  }
  await todo.updateOne({ done: true });

  return res.status(200).json({ data: todo, message: 'Todo marked as completed' });
};
