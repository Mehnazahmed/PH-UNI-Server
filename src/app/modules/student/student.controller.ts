import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';
// import joi from 'joi';
// import studentvalidationSchema from './student.joi.validation';

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB(req.query);

  res.status(200).json({
    success: true,
    message: 'Students are retrived successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);

  res.status(200).json({
    success: true,
    message: 'Student is retrived successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { student } = req.body;

  const result = await StudentServices.updateStudentFromDB(id, student);

  res.status(200).json({
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await StudentServices.deleteStudentFromDB(id);

  res.status(200).json({
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
