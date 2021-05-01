const File = require("../../models/File");
const S3Delete = require("../../services/fileDelete");
const S3Download = require("../../services/fileDownload");

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

const deleteFile = async (req, res) => {
  const fileId = req.params.fileId;
  await File.find({ $or: [{ ancestors: fileId }, { _id: fileId }] })
    .then((files) => {
      files.forEach((file) => {
        S3Delete(file.fileKey);
        file.remove();
      });
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

const downloadFile = (req, res) => {
  const downloadUrl = S3Download.getS3DownloadUrl(req.query.fileKey);
  return res.redirect(downloadUrl);
};

module.exports = {
  createFile,
  showFile,
  deleteFile,
  updateFile,
  showAllFiles,
  downloadFile,
};
