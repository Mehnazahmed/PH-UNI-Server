import express from 'express';
import { StudentControllers } from './student.controller';

const ruter = express.Router();

ruter.get('/', StudentControllers.getAllStudents);
ruter.get('/:studentId', StudentControllers.getSingleStudent);
ruter.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = ruter;
