const File = require("../../models/File");
const validateFileInput = require("../../validations/file");

const createFile = (req, res) => {
  const requestObject = {
    body: req.body,
    file: req.file,
  };

  const { isValid, errors } = validateFileInput(requestObject);

  if (!isValid) return res.status(400).json(errors);

  const newFile = new File({
    owner: req.user,
    fileName: req.body.fileName,
    isFolder: req.body.isFolder,
    parentId: req.body.parentId,
    fileKey: req.file ? req.file.key : undefined,
  });
  newFile
    .save()
    .then((file) => res.json(file))
    .catch((err) => res.json(err));
};

const showFile = (req, res) => {
  const parentId = req.params.fileId;
  File.find({ parentId }, (err, files) => {
    if (err) {
      res.json(err);
    } else {
      res.json(files);
    }
  });
};

const deleteFile = (req, res) => {
  //if file is a folder, delete it and its children, otherwise just delete the one file.
};
module.exports = {
  createFile,
  showFile,
  deleteFile,
};
