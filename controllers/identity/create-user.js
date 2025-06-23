import { error } from '@functions';
import { Identity } from '@models';

export default async (req, res) => {
  const { email } = req.body;

  const userExists = await Identity.findOne({ email });

  if (userExists) {
    throw error(400, 'Eroare! Această adresă de email este deja înregistrată');
  }

  if (typeof req.body.profilePicture !== 'string') {
    req.body.profilePicture = null;
  }

  if (req.body.password !== req.body.confirmPassword) {
    throw error(400, 'Eroare! Parolele nu coincid');
  }

  // Password is hashed automatically
  await Identity.create({
    ...req.body,
    __t: req.body.role,
    active: true,
    confirmed: true,
  });

  return res.status(200).json({
    success: true,
    message: 'Contul de utilizator a fost creat cu succes',
  });
};
