import { Types } from "mongoose";

type TAdmission = {
  user: Types.ObjectId;
  college: Types.ObjectId;
  candidateName: string;
  subject: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  image: string;
};

export default TAdmission;
