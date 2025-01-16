import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true,
        unique: true
    },
    mimeType: {
        type: String
    },
    size: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.model("gallery", imageSchema);
