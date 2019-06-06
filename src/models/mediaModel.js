const getId = () => String(Math.random()).substring(2, 15);

export const Media = ({ description, url, username }) => ({
  id: getId(),
  createdDate: Date.now(),
  description,
  url,
  username,
  comments: [],
  likes: [],
});
