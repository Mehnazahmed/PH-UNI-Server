import express from 'express';
import { StudentControllers } from './student.controller';

const ruter = express.Router();

ruter.post('/create-student', StudentControllers.createStudent);
ruter.get('/', StudentControllers.getAllStudents);
ruter.get('/:studentId', StudentControllers.getSingleStudent);

export const StudentRoutes = ruter;
