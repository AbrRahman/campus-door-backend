import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import config from "../config";
import streamifier from "streamifier";

// Configuration
cloudinary.config({
  cloud_name: config.cloudinary_cloud_name as string,
  api_key: config.cloudinary_api_key as string,
  api_secret: config.cloudinary_api_secret as string,
});

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

export const uploadImageCloudinary = (
  fileBuffer: Buffer
): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        resolve({
          public_id: result?.public_id!,
          secure_url: result?.secure_url!,
        });
      } else {
        reject(error);
      }
    });
    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};

// delete image in cloudinary
export const deleteImageCloudinary = async (public_id: string) => {
  await cloudinary.uploader.destroy(public_id);
};

const storage = multer.memoryStorage();
//  for vercel
const fileFilter = (req: any, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"));
  }
};

export const upload = multer({ storage: storage, fileFilter });
