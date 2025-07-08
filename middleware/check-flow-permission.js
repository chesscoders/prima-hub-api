import { Flow } from '@models';
import mongoose from 'mongoose';

export default async function (req, res, next) {
  try {
    /* ---------- 1. basic param sanity check ---------------------- */
    const { flowId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(flowId)) {
      return res.status(400).json({ message: 'Invalid flow id' });
    }

    /* ---------- 2. fetch flow once -------------------------------- */
    const flow = await Flow.findById(flowId).lean();
    if (!flow) {
      return res.status(404).json({ message: 'Flow not found' });
    }

    /* ---------- 3. permission logic ------------------------------ */
    const required = flow.permission; // can be null

    // 3a) public flow?  (permission === null)
    if (!required) {
      req.flow = flow; // expose for downstream
      return next();
    }

    // 3b) must be logged-in from here on
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // 3c) admin bypass OR explicit permission match
    const isAdmin = user.role === 'admin';
    const hasPerm = Array.isArray(user.permissions) && user.permissions.includes(required);

    if (isAdmin || hasPerm) {
      req.flow = flow; // expose for downstream
      return next();
    }

    /* 3d) otherwise – forbidden */
    return res.status(403).json({ message: 'Insufficient permission' });
  } catch (err) {
    next(err); // let global error handler format it
  }
}
