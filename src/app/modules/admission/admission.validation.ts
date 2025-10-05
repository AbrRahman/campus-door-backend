import z from "zod";

const crateAdmissionValidationSchema = z.object({
  body: z.object({
    user: z.string().min(1, { message: "User id must be required" }),
    college: z.string().min(1, { message: "College id must be required" }),
    candidateName: z.string().min(1, { message: "Candidate name is required" }),
    email: z.string().email("Email is required"),
    phone: z.string().min(1, { message: "Phone number is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    address: z.string("Address is required"),
    dateOfBirth: z.string("dateOfBirth is required"),
  }),
});

const admissionValidation = {
  crateAdmissionValidationSchema,
};
export default admissionValidation;
