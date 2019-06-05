const getId = () => String(Math.random()).substring(2, 15);

export const Media = ({ description, url }) => ({
  id: getId(),
  createdDate: Date.now(),
  description,
  url,
  comments: [],
  likes: []
});
