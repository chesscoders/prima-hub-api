import { error } from '@functions';
import { Identity } from '@models';

export default async (req, res) => {
  const { email } = req.body;
  console.log('req.body: ', req.body);

  const userExists = await Identity.findOne({ email });

  if (userExists) {
    throw error(400, 'Eroare! Această adresă de email este deja înregistrată');
  }

  // Password is hashed automatically
  await Identity.create({
    ...req.body,
    active: true,
    confirmed: true,
  });

  return res.status(200).json({
    success: true,
    message: 'Contul de utilizator a fost creat cu succes',
  });
};
