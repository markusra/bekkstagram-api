import { User } from '../models';
const userCache = {};

export const getUser = (req, res) => {
  const { userId } = req.params;
  res.json(userCache[userId] || null);
};

export const setUser = (req, res) => {
  const { userId: id } = req.params;
  const { username } = req.body;

  const user = userCache[id] || new User({ id, username });
  user.username = username;

  userCache[id] = user;
  res.json(user);
};
