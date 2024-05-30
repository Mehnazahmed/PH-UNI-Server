import { z } from 'zod';
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from './academicSemester.constant';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...AcademicSemesterName] as [string, ...string[]])
      .refine((value) => typeof value === 'string', {
        message: 'Semester name must be a string',
      }),
    code: z
      .enum([...AcademicSemesterCode] as [string, ...string[]])
      .refine((value) => typeof value === 'string', {
        message: 'Semester code must be a string',
      }),
    year: z.string().refine(
      (value) => {
        return /^[0-9]+$/.test(value);
      },
      {
        message: 'Year must be a numeric string',
      },
    ),
    startMonth: z
      .enum([...Months] as [string, ...string[]])
      .refine((value) => typeof value === 'string', {
        message: 'Start month must be a string',
      }),
    endMonth: z
      .enum([...Months] as [string, ...string[]])
      .refine((value) => typeof value === 'string', {
        message: 'End month must be a string',
      }),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum([...Object.values(AcademicSemesterName)] as [string, ...string[]])
      .optional(),
    code: z
      .enum([...Object.values(AcademicSemesterCode)] as [string, ...string[]])
      .optional(),
    year: z.string().optional(),

    startMonth: z
      .enum([...Object.values(Months)] as [string, ...string[]])
      .optional(),
    endMonth: z
      .enum([...Object.values(Months)] as [string, ...string[]])
      .optional(),
  }),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterValidationSchema,
  updateAcademicSemesterValidationSchema,
};
