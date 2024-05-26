import { z } from 'zod';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z
      .enum(['Autumn', 'Summer', 'Fall'])
      .refine((value) => typeof value === 'string', {
        message: 'Semester name must be a string',
      }),
    code: z
      .enum(['01', '02', '03'])
      .refine((value) => typeof value === 'string', {
        message: 'Semester code must be a string',
      }),
    year: z
      .number()
      .int()
      .nonnegative()
      .refine((value) => Number.isInteger(value), {
        message: 'Year must be an integer',
      }),
    startMonth: z
      .enum([
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
      ])
      .refine((value) => typeof value === 'string', {
        message: 'Start month must be a string',
      }),
    endMonth: z
      .enum([
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
      ])
      .refine((value) => typeof value === 'string', {
        message: 'End month must be a string',
      }),
  }),
});

export const AcademicSemesterValidations = {
  createAcademicSemesterValidationSchema,
};
