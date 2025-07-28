const permissionsMap = {
  'achizitie-teren': 'achizitie',
  'concept-arhitectural': 'concept',
  'remedieri-garantie': 'remedieri',
  'bransamente-utilitati': 'bransamente-utilitati',
  intabulare: 'intabulare',
  'proiectare-dtac': '3',
  'proiectare-pt-dde': '3',
  'receptie-clienti': '8',
};
export default async function (req, res, next) {
  try {
    /* ---------- 1. basic param sanity check ---------------------- */
    const { flow } = req.params;
    const required = permissionsMap[flow];

    if (!required) {
      return res.status(404).json({ message: 'Flow not found' });
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
      req.flow = flow;
      return next();
    }

    /* 3d) otherwise – forbidden */
    return res.status(403).json({ message: 'Insufficient permission' });
  } catch (err) {
    next(err);
  }
}
