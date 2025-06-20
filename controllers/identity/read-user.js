const { Identity } = require('@models');
const { error } = require('@functions');

export default module.exports = async (req, res) => {
  const { id } = req.params;

  const user = await Identity.findById(id).lean();

  if (!user) {
    return error(res, 404, 'Utilizatorul nu a fost găsit');
  }

  return res.status(200).json(user);
};
