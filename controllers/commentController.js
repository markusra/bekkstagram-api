Comment = require("../models/commentModel");

exports.index = function(req, res) {
  Comment.get(function(err, comments) {
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

exports.new = function(req, res) {
  var comment = new Comment();
  comment.avatarUrl = req.body.avatarUrl;
  comment.name = req.body.name ? req.body.name : comment.name;
  comment.gender = req.body.gender;
  comment.email = req.body.email;

  comment.save(function(err) {
    res.json({
      message: "New comment created!",
      data: comment
    });
  });
};

exports.view = function(req, res) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) res.send(err);
    res.json({
      message: "Comment details loading..",
      data: comment
    });
  });
};

exports.update = function(req, res) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) res.send(err);
    comment.avatarUrl = req.body.avatarUrl;
    comment.name = req.body.name ? req.body.name : comment.name;
    comment.gender = req.body.gender;
    comment.email = req.body.email;

    comment.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "Comment info updated",
        data: comment
      });
    });
  });
};

exports.delete = function(req, res) {
  Comment.remove(
    {
      _id: req.params.comment_id
    },
    function(err, comment) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Contact deleted"
      });
    }
  );
};
