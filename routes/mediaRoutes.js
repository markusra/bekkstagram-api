import express from "express";
import {
  createMedia,
  deleteMedia,
  getAllMedia,
  getMediaById,
  updateMedia
} from "../controllers/mediaController";

const router = express.Router();

/**
 *  @swagger
 *  /media:
 *    get:
 *      summary: Returns all media
 *      responses:
 *        200:
 *          description:
 */
router
  .route("/")
  .get(getAllMedia)
  .post(createMedia);

/**
 *  @swagger
 *  /media/{mediaId}:
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
  .route("/:media_id")
  .get(getMediaById)
  .patch(updateMedia)
  .put(updateMedia)
  .delete(deleteMedia);

export default router;
