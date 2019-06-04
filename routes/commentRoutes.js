import express from "express";
import {
  createComment,
  deleteComment,
  getAllComments,
  getCommentById,
  updateComment
} from "../controllers/commentController";

const router = express.Router();

/**
 *  @swagger
 *  /comments:
 *    get:
 *      summary: Returns all comments
 *      responses:
 *        200:
 *          description:
 */
router
  .route("/")
  .get(getAllComments)
  .post(createComment);

/**
 *  @swagger
 *  /comments/{commentId}:
 *    get:
 *      description: Returns the homepage
 *      parameters:
 *      - name: "commentId"
 *        in: "path"
 *        schema:
 *          type: string
 *          default: 5ca25337bf73cf8e583edf7a
 *        description: "ID of comment to return"
 *        required: true
 *      responses:
 *        200:
 *          description: It worked
 */
router
  .route("/:comment_id")
  .get(getCommentById)
  .patch(updateComment)
  .put(updateComment)
  .delete(deleteComment);

export default router;
