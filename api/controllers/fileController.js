const File = require("../../models/File");
const S3Delete = require("../../services/fileDelete");

const createFile = (req, res) => {
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
      return res.json(files);
    })
    .catch((err) => res.json(err));
};

const deleteFile = (req, res) => {
  const fileId = req.params.fileId;
  File.deleteMany({
    $or: [{ ancestors: fileId }, { _id: fileId }],
  })
    .then(() => {
      S3Delete(req.body.fileKey);
      res.json(fileId);
    })
    .catch((err) => res.json(err));
};

const updateFile = (req, res) => {
  const fileId = req.params.fileId;
  const newName = req.body.fileName;

  File.findOneAndUpdate({ _id: fileId }, { fileName: newName }, { new: true })
    .then((file) => res.json(file))
    .catch((err) => res.json(err));
};

const showAllFiles = (req, res) => {
  const currentUser = req.user._id;

  File.find({ owner: currentUser, parentId: null })
    .then((files) => {
      res.json(files);
    })
    .catch((err) => res.json(err));
};

module.exports = {
  createFile,
  showFile,
  deleteFile,
  updateFile,
  showAllFiles,
};
