const File = require("../../models/File");
const validateFileInput = require("../../validations/file");
const jwt_decode = require('jwt-decode');

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
  File.deleteMany({
    $or: [{ ancestors: req.params.fileId }, { _id: req.params.fileId }],
  })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

const updateFile = (req, res) => {
  const fileId = req.params.fileId;
  const newName = req.body.fileName;

  const jwt = req.headers.authorization.replace('Bearer ', '');
  const decoded = jwt_decode(jwt);
   
  const userId = decoded.sub;

  File.updateOne({'$and':[{_id: fileId},{owner: userId}]}, {fileName: newName})
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

const showAllFiles = (req, res) => {
  // parsing the userId
  // Find all the files using this userID and with parentID to be NULL
};

module.exports = {
  createFile,
  showFile,
  deleteFile,
  updateFile,
  showAllFiles,
};
