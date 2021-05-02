require("dotenv").config();
const aws = require("aws-sdk");
const filePath = "./test.json";
const fs = require("fs");
const Blob = require("cross-blob");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const createFileStream = (fileKey, res) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: fileKey,
  };
  return s3.getObject(params).createReadStream();
};

module.exports = {
  createFileStream,
};
