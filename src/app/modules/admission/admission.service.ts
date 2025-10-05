import { uploadImageCloudinary } from "../../utils/handleImageUpload";
import TAdmission from "./admission.interface";
import AdmissionModel from "./admission.model";

// create college admission
const createAdmissionIntoDb = async (
  payload: Partial<TAdmission>,
  file: any
) => {
  // upload into cloudinary
  const upload_url = await uploadImageCloudinary(file?.buffer);
  const secure_url = upload_url?.secure_url as string;
  let newAdmission = new AdmissionModel({
    ...payload,
    image: secure_url,
  });
  const result = await newAdmission.save();
  return result;
};

// get user admission
const getUserAllAdmissionFromDB = async (userId: string) => {
  const result = await AdmissionModel.findOne({ user: userId })
    .populate("user")
    .populate("college");
  return result;
};

const admissionService = {
  createAdmissionIntoDb,
  getUserAllAdmissionFromDB,
};
export default admissionService;
