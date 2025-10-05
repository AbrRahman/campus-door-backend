import mongoose, { Schema } from "mongoose";
import TEvent from "./college.interface";
import TCollege from "./college.interface";

const collegeSchema = new Schema<TCollege>(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    admissionDates: {
      type: String,
      require: true,
      trim: true,
    },
    rating: {
      type: Number,
      require: true,
      trim: true,
    },
    researchCount: {
      type: Number,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    events: {
      type: [String],
      require: true,
      trim: true,
    },
    sports: {
      type: [String],
      require: true,
      trim: true,
    },
    researchWorks: {
      type: [String],
      require: true,
      trim: true,
    },

    image: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const CollegeModel = mongoose.model<TCollege>("college", collegeSchema);

export default CollegeModel;
