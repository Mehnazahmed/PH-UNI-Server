import { adminValidations } from './../admin/admin.validtion';
import { facultyValidations } from './../faculty/faculty.validation';
import express from 'express';

import { studentValidations } from './../student/student.validation';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validRequest';
import auth from '../../middlewares/auth';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',

  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(facultyValidations.createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  auth(USER_ROLE.admin),
  validateRequest(adminValidations.createAdminValidationSchema),
  UserControllers.createAdmin,
);

router.post(
  '/change-status/:id',
  auth('admin'),
  validateRequest(UserValidation.changeStatusValidationSchema),
  UserControllers.changeStatus,
);

router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);

export const UserRoutes = router;
