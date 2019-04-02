let router = require("express").Router();

router.get("/", function(req, res) {
  res.json({
    status: "success",
    message: "Welcome to the Bekkstagram API"
  });
});

// Import comment controller
var commentController = require("./controllers/commentController");
router
  .route("/comments")
  .get(commentController.index)
  .post(commentController.new);
router
  .route("/comments/:comment_id")
  .get(commentController.view)
  .patch(commentController.update)
  .put(commentController.update)
  .delete(commentController.delete);

module.exports = router;
