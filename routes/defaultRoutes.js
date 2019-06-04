import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the Bekkstagram API"
  });
});

export default router;
