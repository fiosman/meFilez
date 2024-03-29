require("dotenv").config();
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

const limits = {
  files: 1,
  fileSize: 3000000,
};

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket:
      process.env.NODE_ENV === "production"
        ? process.env.BUCKET_NAME
        : process.env.BUCKET_NAME_DEV,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `${Date.now().toString()}${file.originalname}`);
    },
    contentDisposition: function (req, file, cb) {
      if (!file.mimetype.includes("image")) {
        cb(null, "attachment");
      } else {
        cb(null, "inline");
      }
    },
    acl: "public-read",
  }),
  limits: limits,
});

module.exports = upload;
