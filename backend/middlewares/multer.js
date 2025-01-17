import multer from "multer";
import pkg from "multer-storage-cloudinary";
const { CloudinaryStorage } = pkg;
import cloudinary from "../services/cloudinary.js"

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'galleries',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.originalname.split('.')[0] + ""
    },
    transformation: [
        {
            quality: "auto:good", 
        },
    ],
})

const cloudinaryFileUploader = multer({ 
    storage,
    limits: {
        fileSize: 20 * 1024 * 1024,  // 20 mb maximum should be allow 
    },
}).array('images', 20);

export const uploadMultiple = cloudinaryFileUploader;
