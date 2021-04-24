require("dotenv").config();
const aws = require("aws-sdk");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const deleteS3Item = (req, res, next) => {
  s3.deleteObject(
    {
      Bucket: process.env.BUCKET_NAME,
      Key: req.body.fileKey,
    },
    function (err, data) {
      if (err) {
        return;
      } else {
        return;
      }
    }
  );
  next();
};

module.exports = deleteS3Item;
