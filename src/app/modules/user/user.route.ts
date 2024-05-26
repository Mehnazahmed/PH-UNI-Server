import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import validateRequest from '../../middlewares/validRequest';

const ruter = express.Router();

ruter.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);

export const UserRoutes = ruter;
