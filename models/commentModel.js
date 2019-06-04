const getId = () => String(Math.random()).substring(2, 15);

export const Comment = ({ text }) => ({
  id: getId(),
  createdDate: Date.now(),
  text
});
