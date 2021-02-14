const validString = require("./valid-string");
const Validator = require("validator");

module.exports = function validateFileInput(data) {
  let errors = {};
  data.body.fileName = validString(data.body.fileName)
    ? data.body.fileName
    : "";

  if (Validator.isEmpty(data.body.fileName)) {
    errors.fileName = "File name is required";
  }

  if (data.file === undefined) {
    errors.file = "File input is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
