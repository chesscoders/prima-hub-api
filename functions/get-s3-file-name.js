const { createHash } = require('crypto');
const path = require('path');

const getS3FileName = (fileName) => {
  const sha1Hash = createHash('sha1');
  const NOW = new Date().toISOString();

  sha1Hash.update(`${fileName}${NOW}`);

  const hash = sha1Hash.copy().digest('hex');
  const extention = path.parse(fileName).ext || '';

  return `${hash}${extention}`;
};

export default getS3FileName;
