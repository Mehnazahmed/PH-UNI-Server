import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'Firstname is required' }) // Ensuring non-empty first
    .max(20, { message: 'Firstname cannot be more than 20 characters' })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: '{VALUE} is not capitalized',
      },
    ),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Lastname is required' }), // Ensuring non-empty
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }), // Ensuring non-empty
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }), // Ensuring non-empty
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }), // Ensuring non-empty
  motherName: z.string().min(1, { message: 'Mother name is required' }), // Ensuring non-empty
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }), // Ensuring non-empty
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' }), // Ensuring non-empty
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }), // Ensuring non-empty
  occupation: z.string().min(1, { message: 'Occupation is required' }), // Ensuring non-empty
  contactNo: z.string().min(1, { message: 'Contact number is required' }), // Ensuring non-empty
  address: z.string().min(1, { message: 'Address is required' }), // Ensuring non-empty
});

const createStudentValidationSchema = z.object({
  body: z.object({
    // id: z.string().min(1, { message: 'Student ID is required' }), // Ensuring non-empty
    password: z.string().max(20).min(1, { message: 'Password is required' }), // Ensuring non-empty
    student: z.object({
      name: userNameValidationSchema, // Nested schema
      gender: z.enum(['male', 'female', 'other'], {
        errorMap: (issue, _ctx) => {
          if (issue.code === 'invalid_enum_value') {
            return { message: '{VALUE} is not a valid gender' };
          }
          return { message: 'Gender is required' };
        },
      }),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email('Email must be a valid email')
        .min(1, { message: 'Email is required' }), // Ensuring non-empty
      contactNo: z.string().min(1, { message: 'Contact number is required' }), // Ensuring non-empty
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact number is required' }), // Ensuring non-empty
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional()
        .refine(
          (value) =>
            value === undefined ||
            ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].includes(value),
          {
            message: '{VALUE} is not a valid blood group',
          },
        ),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }), // Ensuring non-empty
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }), // Ensuring non-empty
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImage: z.string().optional(),
      // isActive: z
      //   .enum(['active', 'blocked'])
      //   .default('active')
      //   .refine((value) => ['active', 'blocked'].includes(value), {
      //     message: '{VALUE} is not a valid status',
      //   }),
      // isDeleted: z.boolean(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
