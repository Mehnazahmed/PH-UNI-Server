import express from 'express';
import auth from '../../middlewares/auth';

import { AcademicSemesterControllers } from './academicSemester.controller';
import { AcademicSemesterValidations } from './academicSemester.validation';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validRequest';

const router = express.Router();

router.post(
  '/create-academic-semester',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get(
  '/:courseId',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student,
  ),
  AcademicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:courseId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

router.get(
  '/',
  auth(USER_ROLE.admin),
  AcademicSemesterControllers.getAllAcademicSemesters,
);

export const AcademicSemesterRoutes = router;
