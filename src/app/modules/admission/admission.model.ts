import mongoose, { Schema } from "mongoose";
import TAdmission from "./admission.interface";

const admissionSchema = new Schema<TAdmission>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "user",
    },
    college: {
      type: Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "college",
    },
    candidateName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
    },
    dateOfBirth: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const AdmissionModel = mongoose.model<TAdmission>("admission", admissionSchema);

export default AdmissionModel;
