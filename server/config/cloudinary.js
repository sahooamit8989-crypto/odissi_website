



import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

/* ===========================
   CONNECT CLOUDINARY
=========================== */
const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  console.log("✅ Cloudinary connected");
};

/* ===========================
   UPLOAD IMAGE BUFFER
=========================== */
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "doctors" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export { cloudinary, connectCloudinary, uploadToCloudinary };
