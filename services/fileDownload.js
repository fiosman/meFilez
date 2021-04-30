require("dotenv").config();
const aws = require("aws-sdk");
const filePath = "./test.json";
const fs = require("fs");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const download = (fileKey, res) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileKey,
  };

  s3.getObject(params, function (err, data) {
    if (err) console.log(err);
    fs.writeFileSync(filePath, data.Body.toString());
  });
};

const getDownloadUrl = (fileKey) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileKey,
    Expires: 3600,
  };

  const url = s3.getSignedUrl("getObject", params);

  return url;
};

module.exports.S3Download = download;
module.exports.getS3DownloadUrl = getDownloadUrl;
