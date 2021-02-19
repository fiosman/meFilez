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
  File.findOne({ _id: req.params.fileId }, (err, file) => {
    if (err) {
      res.json(err);
    } else {
      File.find({ parentId: file._id }, (err, files) => {
        if (err) {
          res.send(500).json(err);
        } else {
          res.json(files);
        }
      });
    }
  });
};

const deleteFile = (req, res) => {
  console.log(req.params);
};
module.exports = {
  createFile,
  showFile,
  deleteFile,
};
