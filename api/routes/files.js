const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  createFile,
  showFile,
  deleteFile,
  updateFile,
  showAllFiles,
  downloadFile,
} = require("../controllers/fileController");
const S3Upload = require("../../services/fileUpload");
const userAuthorization = require("../../services/userAuth");
const fileValidation = require("../../validations/file");

router.post(
  "/",
  [
    passport.authenticate("jwt", { session: false }),
    S3Upload.single("file"),
    fileValidation,
  ],
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
  [passport.authenticate("jwt", { session: false }), userAuthorization],
  deleteFile
);

router.patch(
  "/:fileId",
  [
    passport.authenticate("jwt", { session: false }),
    userAuthorization,
    fileValidation,
  ],
  updateFile
);

router.get(
  "/download",
  [passport.authenticate("jwt", { session: false }), userAuthorization],
  downloadFile
);

module.exports = router;
