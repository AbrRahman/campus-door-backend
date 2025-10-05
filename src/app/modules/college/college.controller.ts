import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import collegeService from "./college.service";

// insert College controller
const createCollege = catchAsync(async (req, res, next) => {
  const result = await collegeService.createACollageIntoDB(
    req?.body,
    req?.file
  );

  res.status(status.OK).json({
    success: true,
    message: "College create successfully",
    data: result,
  });
});

// get all College controller
const getAllCollege = catchAsync(async (req, res, next) => {
  const { searchTerm } = req?.query;
  const result = await collegeService.getAllCollegeFromDB(searchTerm as string);
  res.status(status.OK).json({
    success: true,
    message: "Get all college successfully",
    data: result,
  });
});

// get single college controller
const getSingleCollege = catchAsync(async (req, res, next) => {
  const collegeId = req?.params?.id as string;
  const result = await collegeService.getSingleSingleFromDB(collegeId);
  res.status(status.OK).json({
    success: true,
    message: "Get college successfully",
    data: result,
  });
});

// update College controller
const updateCollege = catchAsync(async (req, res, next) => {
  const CollegeId = req?.params?.id as string;
  const result = await collegeService.updateCollegeIntoDB(
    req?.body,
    CollegeId,
    req?.file
  );
  res.status(status.OK).json({
    success: true,
    message: "Update college successfully",
    data: result,
  });
});

// soft delete college controller
const deleteCollege = catchAsync(async (req, res, next) => {
  const collegeId = req?.params?.id as string;
  const result = await collegeService.deleteCollegeIntoB(collegeId);
  res.status(status.OK).json({
    success: true,
    message: "College delete successfully",
    data: result,
  });
});

const collegeController = {
  createCollege,
  getAllCollege,
  getSingleCollege,
  updateCollege,
  deleteCollege,
};
export default collegeController;
