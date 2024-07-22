import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// This is Cloudinary config like name , API key , and Secret code 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// This is hole Code, How to Upload Files , video , pDF or etc in Cloudinary(Production grade code)
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // File Upload on Cloudinary
    const responce = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("The file will upload in cloudinary ", responce.url);
    return responce;
  } catch (error) {
    fs.unlinkSync(localFilePath);
  }
};

export { uploadOnCloudinary };
