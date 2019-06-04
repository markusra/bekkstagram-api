import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  text: String,
  create_date: {
    type: Date,
    default: Date.now
  },
  media: { type: mongoose.Schema.Types.ObjectId, ref: "Media" }
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
