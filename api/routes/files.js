const express = require("express");
const router = express.Router();
const passport = require("passport");
const { createFile } = require("../controllers/fileController");
const upload = require("../../services/fileUpload");

router.post(
  "/",
  [passport.authenticate("jwt", { session: false }), upload.single("file")],
  createFile
);

module.exports = router;

// When user is trying to upload a file here are the steps 
// 1) The first middle ware that is ran will be passport, which will authenitcate the request based on JWT from the cookie header 
// 2) The second middle ware will be ran, which is uploading the file that was sleected by the user to S3 
// 3) The createFile controller action will be invoked