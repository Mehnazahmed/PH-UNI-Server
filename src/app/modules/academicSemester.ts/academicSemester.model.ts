import { Schema, model } from 'mongoose';
import {
  TAcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface';

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AcademicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
];
const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: [true, 'Semester name is required'],
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: [true, 'Semester code is required'],
    },
    year: {
      type: Date,
      required: [true, 'Year is required'],
    },
    startMonth: {
      type: String,
      enum: Months,
      required: [true, 'Start month is required'],
    },
    endMonth: {
      type: String,
      enum: Months,
      required: [true, 'End month is required'],
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
