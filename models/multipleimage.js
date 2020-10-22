const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MImageSchema = new Schema({
  title: String,
  image1: String,
  image2: String,
  // imageId: String,
});

const MultipleImage = mongoose.model("MImage", MImageSchema);
module.exports = MultipleImage;
