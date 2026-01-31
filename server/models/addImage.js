import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    about: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String, // store image URL (Cloudinary / local / S3)
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model("Content", contentSchema);

export default Content;
