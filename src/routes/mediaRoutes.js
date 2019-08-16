import express from "express";
import {
  createComment,
  createCommentLike,
  createLike,
  createMedia,
  deleteMedia,
  deleteLike,
  deleteCommentLike,
  getAllMedia,
  getComment,
  getCommentLikes,
  getComments,
  getLikes,
  getMediaById,
  updateMedia,
} from "../controllers/mediaController";

const router = express.Router();

router
  .route("/")
  .get(getAllMedia)
  .post(createMedia);

router
  .route("/:mediaId")
  .get(getMediaById)
  .delete(deleteMedia);
// .patch(updateMedia)
// .put(updateMedia);

router
  .route("/:mediaId/likes")
  .get(getLikes)
  .put(createLike)
  .delete(deleteLike);

router
  .route("/:mediaId/comments")
  .get(getComments)
  .put(createComment);

router
  .route("/:mediaId/comments/:commentId")
  .get(getComment)

router
  .route("/:mediaId/comments/:commentId/likes")
  .get(getCommentLikes)
  .put(createCommentLike)
  .delete(deleteCommentLike);

export default router;
