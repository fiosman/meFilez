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
const File = require("../../models/File");

const userAuthorization = (req, res, next) => {
  const currentUser = req.user._id;
  const fileId = req.params.fileId;
  File.findById(fileId)
    .then((file) => {
      return file.owner.equals(currentUser)
        ? next()
        : res
            .status(400)
            .json(["You are not authorized to complete this action."]);
    })
    .catch((err) => res.status(404).json(["File was not found"]));
};

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
  [passport.authenticate("jwt", { session: false }), userAuthorization],
  deleteFile
);

router.patch(
  "/:fileId",
  [passport.authenticate("jwt", { session: false }), userAuthorization],
  updateFile
);

module.exports = router;
