import { userServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  //creating a schema validation string using zod

  const { password, student: studentData } = req.body;

  // const { error, value } = studentvalidationSchema.validate(studentData);
  // console.log({ error, value });
  // const zodparsedData = studentValidationSchema.parse(studentData);
  const result = await userServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});
export const userControllers = {
  createStudent,
};
