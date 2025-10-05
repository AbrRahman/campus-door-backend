import express from "express";
import { upload } from "../../utils/handleImageUpload";
import validationRequest from "../../middleware/validationRequest";
import auth from "../../middleware/auth";
import collegeController from "./college.controller";
import collegeValidation from "./college.validation";

const router = express.Router();

// create college into db
router.post(
  "/",
  auth("admin"),
  upload.single("file"),
  validationRequest(collegeValidation.createCollegeValidationSchema),
  collegeController.createCollege
);
// get all college
router.get("/", collegeController.getAllCollege);
// get single college
router.get("/:id", collegeController.getSingleCollege);

// update college
router.patch(
  "/:id",
  auth("admin"),
  upload.single("file"),
  validationRequest(collegeValidation.updateCollegeValidationSchema),
  collegeController.updateCollege
);

// delete delete college
router.delete("/:id", auth("admin"), collegeController.deleteCollege);

const collegeRouter = router;
export default collegeRouter;
