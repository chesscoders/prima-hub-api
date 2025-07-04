import { error } from '@functions';
import { Identity } from '@models';
import bcrypt from 'bcryptjs';

export default async (req, res) => {
  if (!req.user?.me) {
    throw error(404, 'Eroare! Parametrii obligatorii lipsesc');
  }

  const { currentPassword, changePassword, confirmPassword } = req.body;
  if (!currentPassword || !changePassword || !confirmPassword) {
    throw error(400, 'Eroare! Parametrii obligatorii lipsesc');
  }

  if (changePassword !== confirmPassword) {
    throw error(400, 'Eroare! Parolele nu coincid');
  }

  if (changePassword.length < 8) {
    throw error(400, 'Eroare! Parola trebuie să aibă cel puțin 8 caractere');
  }

  const document = await Identity.findById(req.user.me).select('password');
  if (!document) {
    throw error(500, 'Eroare! Contul nu a fost găsit');
  }

  // Check if current password is correct
  const isCurrentPasswordValid = bcrypt.compareSync(currentPassword, document.password);
  if (!isCurrentPasswordValid) {
    throw error(400, 'Eroare! Parola actuală este incorectă');
  }

  await document.updateOne({ password: bcrypt.hashSync(changePassword) });

  return res.status(200).json({
    data: document,
    message: 'Parola a fost schimbată cu succes',
  });
};
