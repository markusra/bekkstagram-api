import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json(
    success({
      message: "Welcome to the Bekkstagram API",
      data: []
    })
  );
});

export default router;
