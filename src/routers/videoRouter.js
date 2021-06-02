import express from "express";

import {
  watch,
  edit,
  upload,
  deleteVideo,
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.post("/:id(\\d+)/edit");
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
