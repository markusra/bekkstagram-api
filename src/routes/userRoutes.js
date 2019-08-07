import express from 'express';
import { getUser, setUser } from '../controllers/userController';

const router = express.Router();

router
  .route('/:userId')
  .get(getUser)
  .post(setUser);

export default router;
