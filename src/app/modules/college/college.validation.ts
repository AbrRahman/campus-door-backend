import z from "zod";

const createCollegeValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, "College name is required"),
    admissionDates: z.string().trim().min(1, "College admission is required"),
    description: z.string().trim().min(1, "Description is required"),
    rating: z.string().trim().min(1, "Rating is required"),
    researchCount: z.string().trim().min(1, "Research Count is required"),
    admissionProcess: z.string().trim().min(1, "Admission Process required"),
    events: z.array(z.string()).default([]),
    sports: z.array(z.string()).default([]),
    researchWorks: z.array(z.string()).default([]),
  }),
});
const updateCollegeValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().optional(),
    admissionDates: z.string().optional(),
    description: z.string().trim().optional(),
    rating: z.string().trim().optional(),
    researchCount: z.string().optional(),
    events: z.array(z.string()).optional(),
    sports: z.array(z.string()).optional(),
    admissionProcess: z.array(z.string()).optional(),
    researchWorks: z.array(z.string()).optional(),
  }),
});

const collegeValidation = {
  createCollegeValidationSchema,
  updateCollegeValidationSchema,
};
export default collegeValidation;
