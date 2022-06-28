import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true, minLength: 2, maxLength: 50 },
    description: {type: String, required: true, trim: true, maxLength: 80 },
    createdAt: {type:Date, require:true, default: Date.now },
    hashtag: [{ type: String, trim: true }],
    meta: {
        views: { type:Number, default: 0, required: true },
        rating: { type:Number, default: 0, required: true },

    }

});

const Video = mongoose.model("Video", videoSchema);
export default Video;