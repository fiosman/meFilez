const File = require("../../models/File");
const validateFileInput = require("../../validations/file");

const createFile = (req, res) => {
  console.log(req.file);
  const { isValid, errors } = validateFileInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const newFile = new File({
    owner: req.user,
    fileName: req.body.fileName,
    isFolder: req.body.isFolder,
    parentId: req.body.parentId,
  });
  newFile
    .save()
    .then((file) => res.json(file))
    .catch((err) => res.json(err));
};

module.exports = {
  createFile,
};
