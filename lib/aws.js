const { S3 } = require('aws-sdk');

const aws = new S3({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  region: process.env.DO_SPACES_REGION,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});

aws.download = async function downloadDocument(key) {
  return new Promise((resolve, reject) => {
    aws.getObject({ Bucket: process.env.DO_SPACES_BUCKET, Key: key }, (err, data) => {
      if (err) {
        return reject(Error('Eroare! Documentul nu a fost descărcat: ' + err.message));
      }
      resolve(data.Body);
    });
  });
};

aws.upload = async function uploadDocument(key, data, options = {}) {
  return new Promise((resolve, reject) => {
    const uploadParams = {
      Bucket: process.env.DO_SPACES_BUCKET,
      Key: key,
      Body: data,
    };

    if (options?.public) {
      uploadParams.ACL = 'public-read';
    }

    aws.putObject(uploadParams, (err) => {
      if (err) {
        return reject(Error('Eroare! Documentul nu a fost salvat: ' + err.message));
      }
      resolve(key);
    });
  });
};

aws.remove = async function deleteDocument(key) {
  return new Promise((resolve, reject) => {
    aws.deleteObject({ Bucket: process.env.DO_SPACES_BUCKET, Key: key }, (err) => {
      if (err) {
        return reject(Error('Eroare! Documentul nu a fost șters: ' + err.message));
      }
      resolve(key);
    });
  });
};

module.exports = aws;
