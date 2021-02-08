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
