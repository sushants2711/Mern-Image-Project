import ImageModel from "../models/Image.model.js"


export const imageController = async (req, res) => {
    try {

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ success: false, message: "No files uploaded" })
        }

        if (!req.userId) {
            return res.status(400).json({ success: false, message: "User is not authenticated" });
        }

        // file will uploaded in cloudinary and then map to access all the properties that needed
        const images = req.files.map((file) => ({
            mimeType: file.mimetype,
            originalName: file.originalname,
            size: file.size,
            imageUrl: file.path,
            userId: req.userId
        }));

        // insertMany to insert multiple data in one time in a database
        await ImageModel.insertMany(images);

        return res.status(201).json({ success: true, message: "Photo uploaded successfully" })

    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server error" })
    }
}