const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  createFile,
  showFile,
  deleteFile,
  updateFile,
  showAllFiles,
} = require("../controllers/fileController");
const upload = require("../../services/fileUpload");
const deleteBucketFile = require("../../services/fileDelete");
const userAuthorization = require("../../services/userAuth");

router.post(
  "/",
  [passport.authenticate("jwt", { session: false }), upload.single("file")],
  createFile
);

router.get("/", passport.authenticate("jwt", { session: false }), showAllFiles);

router.get(
  "/:fileId",
  [passport.authenticate("jwt", { session: false }), userAuthorization],
  showFile
);

router.delete(
  "/:fileId",
  [
    passport.authenticate("jwt", { session: false }),
    userAuthorization,
    deleteBucketFile,
  ],
  deleteFile
);

router.patch(
  "/:fileId",
  [passport.authenticate("jwt", { session: false }), userAuthorization],
  updateFile
);

module.exports = router;
