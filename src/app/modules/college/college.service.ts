import { uploadImageCloudinary } from "../../utils/handleImageUpload";
import TCollege from "./college.interface";
import CollegeModel from "./college.model";

// create college
const createACollageIntoDB = async (payload: Partial<TCollege>, file: any) => {
  // upload into cloudinary
  const upload_url = await uploadImageCloudinary(file?.buffer);
  const secure_url = upload_url?.secure_url as string;
  let newCollege = new CollegeModel({
    ...payload,
    image: secure_url,
  });
  const result = await newCollege.save();
  return result;
};

// get all College
const getAllCollegeFromDB = async (query: string) => {
  let searchTerm = "";
  if (query) {
    searchTerm = query as string;
  }

  const result = await CollegeModel.find({
    name: { $regex: searchTerm, $options: "i" },
  });

  return result;
};

// get single College
const getSingleSingleFromDB = async (collegeId: string) => {
  const result = await CollegeModel.findById(collegeId);
  return result;
};

// update college into db
const updateCollegeIntoDB = async (
  payload: Partial<TCollege>,
  collegeId: string,
  file: any
) => {
  let newPayload = payload;
  if (file?.path && file?.fieldname) {
    // upload into cloudinary
    const upload_url = await uploadImageCloudinary(file?.buffer);
    const secure_url = upload_url?.secure_url as string;
    newPayload = {
      image: secure_url,
      ...payload,
    };
  }
  const result = await CollegeModel.findByIdAndUpdate(collegeId, newPayload, {
    runValidators: true,
    new: true,
  });
  return result;
};

const deleteCollegeIntoB = async (collegeId: string) => {
  const result = await CollegeModel.findByIdAndDelete(collegeId);

  return result;
};

const collegeService = {
  createACollageIntoDB,
  getAllCollegeFromDB,
  getSingleSingleFromDB,
  updateCollegeIntoDB,
  deleteCollegeIntoB,
};

export default collegeService;
