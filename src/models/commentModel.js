const getId = () => String(Math.random()).substring(2, 15);

export const Comment = ({ text, username }) => ({
  id: getId(),
  createdDate: Date.now(),
  text,
  username,
});
