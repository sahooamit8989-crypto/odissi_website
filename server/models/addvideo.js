import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    videoUrl: {
      type: String, // YouTube link / Cloudinary video URL
      required: true,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
export default Video;
