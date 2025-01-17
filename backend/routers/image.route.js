import express from "express";
import { uploadMultiple } from "../middlewares/multer.js";
import { allImages, imageById, imageController } from "../controllers/image.controller.js";
import { authVerifyAuthorization } from "../middlewares/authVerify.js";

const imageRouter = express.Router();

imageRouter.route("/upload-images").post(authVerifyAuthorization, uploadMultiple, imageController)
imageRouter.route("/").get(authVerifyAuthorization, allImages)
imageRouter.route('/:id').get(authVerifyAuthorization, imageById)

export default imageRouter