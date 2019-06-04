export const error = ({ message }) => ({
  status: "error",
  message
});

export const success = ({ data, message }) => ({
  status: "success",
  message,
  data
});
