const File = require("../models/File");

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

module.exports = userAuthorization;
