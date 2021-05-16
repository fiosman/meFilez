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
const S3Upload = require("../../services/fileUpload");
const userAuthorization = require("../../services/userAuth");
const {
  validateFileInput,
  validateFileLimit,
} = require("../../validations/file");

router.post(
  "/",
  [
    passport.authenticate("jwt", { session: false }),
    validateFileLimit,
    S3Upload.single("file"),
    validateFileInput,
  ],
  createFile
);

router.get(
  ["/", "/files"],
  passport.authenticate("jwt", { session: false }),
  showAllFiles
);

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
    validateFileInput,
  ],
  updateFile
);

module.exports = router;
