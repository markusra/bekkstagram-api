import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import defaultRoutes from "./routes/defaultRoutes";
import mediaRoutes from "./routes/mediaRoutes";

const app = express();
const port = process.env.PORT || 8080;

// Application-Level Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.use("/api", defaultRoutes);
app.use("/api/media", mediaRoutes);

app.listen(port, function() {
  console.log("Running bekstagram-api on port " + port);
});
