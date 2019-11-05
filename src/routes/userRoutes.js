import express from 'express';
import { check } from 'express-validator';
import { getUser, setUser } from '../controllers/userController';

const router = express.Router();

router
  .route('/:userId')
  .get(getUser)
  .post([
    check('userId').isNumeric(),
    check('username').isAscii()
  ], setUser);

export default router;
