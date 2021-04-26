const validString = require("./valid-string");
const Validator = require("validator");
const S3Delete = require("../services/fileDelete");

function validateFileInput(req, res, next) {
  let errors = [];

  req.body.fileName = validString(req.body.fileName) ? req.body.fileName : "";

  if (Validator.isEmpty(req.body.fileName)) {
    errors.push("File name is required");
  }

  if (req.file === undefined && req.body.isFolder == "false") {
    errors.push("File input is required");
  }

  if (errors.length > 0) {
    if (req.file != undefined && req.body.fileName === "") {
      S3Delete(req.file.key);
    }
    return res.status(400).json(errors);
  }

  next();
}

module.exports = validateFileInput;
