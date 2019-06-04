import Comment from "../models/commentModel";

export const getAllComments = (req, res) => {
  Comment.find((err, comments) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Comments retrieved successfully",
      data: comments
    });
  });
};

export const createComment = (req, res) => {
  var comment = new Comment({
    text: req.body.text,
    media: req.body.media
  });

  comment.save(err => {
    res.json({
      message: "New comment created",
      data: comment
    });
  });
};

export const getCommentById = (req, res) => {
  Comment.findById(req.params.comment_id, (err, comment) => {
    if (err) res.send(err);
    res.json({
      message: "Comment with id received",
      data: comment
    });
  });
};

export const updateComment = (req, res) => {
  Comment.findById(req.params.comment_id, (err, comment) => {
    if (err) res.send(err);
    comment.text = req.body.text;

    comment.save(err => {
      if (err) res.json(err);
      res.json({
        message: "Comment info updated",
        data: comment
      });
    });
  });
};

export const deleteComment = (req, res) => {
  Comment.deleteOne(
    {
      _id: req.params.comment_id
    },
    (err, comment) => {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Comment deleted"
      });
    }
  );
};
