import express from 'express';
import { check } from 'express-validator';
import {
  createComment,
  createCommentLike,
  createLike,
  createMedia,
  deleteMedia,
  deleteLike,
  getAllMedia,
  getComment,
  getCommentLikes,
  getComments,
  getLikes,
  getMediaById,
} from '../controllers/mediaController';

const router = express.Router();

router
  .route('/')
  .get(getAllMedia)
  .post([
    check('url').isURL(),
    check('description').isAscii(),
    check('username').isAscii()
  ],
    createMedia
  );

router
  .route('/:mediaId')
  .get(getMediaById)
  .delete(deleteMedia);

router
  .route('/:mediaId/likes')
  .get(getLikes)
  .put([
    check('mediaId').isNumeric(),
    check('username').isAscii()
  ], createLike)
  .delete(deleteLike);

router
  .route('/:mediaId/comments')
  .get(getComments)
  .put([
    check('mediaId').isNumeric(),
    check('text').isAscii(),
    check('username').isAscii()
  ], createComment);

router
  .route('/:mediaId/comments/:commentId')
  .get(getComment);

router
  .route('/:mediaId/comments/:commentId/likes')
  .get(getCommentLikes)
  .put([
    check('mediaId').isNumeric(),
    check('commentId').isNumeric(),
    check('username').isAscii()
  ], createCommentLike);

export default router;
