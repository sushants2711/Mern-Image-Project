import express from "express";
import { uploadMultiple } from "../middlewares/multer.js";
import { imageController } from "../controllers/image.controller.js";
import { authVerifyAuthorization } from "../middlewares/authVerify.js";

const imageRouter = express.Router();

imageRouter.route("/upload-images").post(authVerifyAuthorization, uploadMultiple, imageController)

export default imageRouter