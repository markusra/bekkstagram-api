import express from "express";
import {
  createComment,
  createLike,
  createMedia,
  deleteMedia,
  getAllMedia,
  getComments,
  getLikes,
  getMediaById,
  updateMedia
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
  .put(createLike);

router
  .route("/:mediaId/comments")
  .get(getComments)
  .put(createComment);

export default router;
