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

FileSchema.pre("save", function (next) {
  if (this.parentId != null) {
    File.findById(this.parentId).then((file) => {
      this.ancestors.push(...file.ancestors, file._id);
      next();
    });
  } else {
    next();
  }
});

const File = mongoose.model("file", FileSchema);
module.exports = File;
