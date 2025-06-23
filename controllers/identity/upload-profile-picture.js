const { error, getS3FileName, removeDiacritics } = require('@functions');
const { aws } = require('lib');

module.exports = async (req, res) => {
  const document = req.files.file;
  if (!document) {
    throw error(400, 'Fișierul este obligatoriu');
  }

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes
  if (req.headers['content-length'] > MAX_FILE_SIZE) {
    throw error(413, 'Fișierul este prea mare');
  }

  const key = getS3FileName(removeDiacritics(document.name));

  const options = {
    public: 'true',
  };

  aws.upload(key, document.data, options);

  const name = `${process.env.DO_SPACES_ENDPOINT}/${process.env.DO_SPACES_BUCKET}/${key}`;

  return res.status(200).json({
    message: 'Poză de profil încărcată cu succes.',
    name,
  });
};
