import express from "express";
import auth from "../../middleware/auth";
import admissionController from "./admission.controller";
import validationRequest from "../../middleware/validationRequest";
import admissionValidation from "./admission.validation";

const router = express.Router();

// create admission router
router.post(
  "/",
  auth("admin", "user"),
  validationRequest(admissionValidation.crateAdmissionValidationSchema),
  admissionController.createAdmission
);

// get login user admission
router.get("/", auth("admin", "user"), admissionController.getUserAdmission);

const admissionRouter = router;
export default admissionRouter;
