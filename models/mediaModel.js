import mongoose from "mongoose";

const mediaScheme = mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

mediaScheme.pre("remove", function(next) {
  this.model("Comment").deleteMany({ media: this._id }, next);
});

const Media = mongoose.model("Media", mediaScheme);

export default Media;
