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
  File.find({ parentId })
    .then((files) => {
      files.length < 1
        ? res.status(400).json({ files: "No files were found." })
        : res.json(files);
    })
    .catch((err) => res.json(err));
};

const deleteFile = (req, res) => {
  File.findById(req.params.fileId)
    .then((file) => {
      if (!file) {
        return res.status(400).json({ file: "The file does not exist" });
      }
      if (file.isFolder) {
        File.deleteMany({
          $or: [{ _id: file._id }, { parentId: req.params.fileId }],
        })
          .then((data) => res.json(data))
          .catch((err) => res.json(err));
      } else {
        File.deleteOne({ _id: file._id })
          .then((data) => res.json(data))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
};
module.exports = {
  createFile,
  showFile,
  deleteFile,
};
