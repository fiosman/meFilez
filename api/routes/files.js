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

router.post(
  "/",
  [passport.authenticate("jwt", { session: false }), upload.single("file")],
  createFile
);

router.get("/", passport.authenticate("jwt", { session: false }), showAllFiles);

router.get(
  "/:fileId",
  passport.authenticate("jwt", { session: false }),
  showFile
);

router.delete(
  "/:fileId",
  passport.authenticate("jwt", { session: false }),
  deleteFile
);

router.patch(
  "/:fileId",
  passport.authenticate("jwt", { session: false }),
  updateFile
);

module.exports = router;
