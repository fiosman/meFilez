require("dotenv").config();
const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const download = (fileKey) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileKey,
  };

  s3.getObject(params, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data.body);
    }
  });
};

module.exports = download;
