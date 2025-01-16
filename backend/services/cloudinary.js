import { v2 as cloudinary } from "cloudinary";

export const cloudinaryConection = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
}



// 1359 email is used 

