const fs = require('fs');
const readDir = require('recursive-readdir');
const path = require('path');
const AWS = require('aws-sdk');
const mime = require('mime-types');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.CG_WEB_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.CG_WEB_SECRET_ACCESS_KEY,
  maxRetries: 3,
});

const directoryPath = path.resolve(__dirname, '../public/static');

const getBuildFilesRecursive = (dir, ignores = []) => {
  return new Promise((resolve, reject) => {
    readDir(dir, ignores, (err, files) => (err ? reject(err) : resolve(files)));
  });
};

const generateFileKey = fileName => {
  const s3OjbectPath = fileName.split('/public/static/')[1];

  return `next-assets/_next/${s3OjbectPath}`;
};

const s3 = new AWS.S3();

const uploadToS3 = async () => {
  try {
    const fileArray = await getBuildFilesRecursive(directoryPath, ['.gitkeep']);

    fileArray.map(file => {
      const S3Params = {
        Bucket: process.env.CG_WEB_S3_BUCKET_NAME,
        Body: fs.createReadStream(file),
        Key: generateFileKey(file),
        ACL: 'public-read',
        ContentType: mime.lookup(file),
        ContentEncoding: 'utf-8',
        CacheControl: 'immutable,max-age=31536000,public',
      };

      s3.upload(S3Params, (err, data) => {
        if (err) {
          console.error(err);
          process.exitCode = 1;
        } else {
          console.log(`Assets uploaded to S3: `, data);
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
};

uploadToS3();
