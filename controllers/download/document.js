import { error } from 'express-goodies/functions';
import { aws } from 'lib';

export default async (req, res) => {
  const { name, type } = req.body;

  if (!name || !type) {
    throw error(400, 'Parametri lipsă');
  }

  try {
    const decodedKey = decodeURIComponent(name);
    const document = await aws.download(`${type}/${decodedKey}`);
    res.setHeader('Content-type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${decodedKey}`);

    return res.status(200).send(document);
  } catch (err) {
    throw error(400, err.message);
  }
};
