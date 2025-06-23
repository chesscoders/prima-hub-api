import { error } from '@functions';
import { usersFilters } from '@functions/filters';
import { Identity } from '@models';

export default async (req, res) => {
  const filter = usersFilters(req.query);
  const documents = await Identity.find(filter).paginate(req.query);

  if (!documents) {
    throw error(400, 'Eroare! Utilizatorii nu au fost găsiți');
  }

  return res.status(200).json(documents);
};
