const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    fileName: {
      type: String,
      required: true,
    },
    isFolder: {
      type: Boolean,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "File",
      index: true,
      default: null,
    },
    fileKey: {
      type: String,
    },
    ancestors: [
      { type: Schema.Types.ObjectId, ref: "File", index: true, default: null },
    ],
  },
  { timestamps: true }
);

FileSchema.post("save", function (file, next) {
  File.findById(this.parentId)
    .exec()
    .then((file) => {
      console.log(file.ancestors);
      this.ancestors.push(...file.ancestors, file._id);
    })
    .catch((err) => console.log(err));
  next();
});

const File = mongoose.model("file", FileSchema);
module.exports = File;
