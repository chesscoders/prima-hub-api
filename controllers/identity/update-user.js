import { Identity } from '@models';

export default async (req, res) => {
  // Password is hashed automatically
  await Identity.findByIdAndUpdate(req.params.id, {
    ...req.body,
  });

  return res.status(200).json({
    success: true,
    message: 'Contul de utilizator a fost modificat cu succes',
  });
};
