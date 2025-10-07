import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import admissionService from "./admission.service";

// create Admission controller
const createAdmission = catchAsync(async (req, res, next) => {
  const result = await admissionService.createAdmissionIntoDb(
    req?.body,
    req?.file
  );
  let success = true;
  let message = "Admission data create successfully";
  if (!result) {
    (success = false), (message = "Admission failed");
  }
  res.status(status.OK).json({
    success: success,
    message: message,
    data: result,
  });
});

const getMyAdmittedCollege = catchAsync(async (req, res, next) => {
  const userId = req?.user?._id;
  const result = await admissionService.getMyAdmittedCollegeFromDB(userId);

  let success = true;
  let message = "Get my admission data successfully";
  if (!result) {
    success = false;
    message = "Get my admission data Failed";
  }
  res.status(status.OK).json({
    success,
    message,
    data: result,
  });
});

const admissionController = {
  createAdmission,
  getMyAdmittedCollege,
};
export default admissionController;
