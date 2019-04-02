var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
  avatarUrl: String,
  name: {
    type: String,
    required: true
  },
  gender: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Comment = (module.exports = mongoose.model("comment", commentSchema));
module.exports.get = function(callback, limit) {
  Comment.find(callback).limit(limit);
};
