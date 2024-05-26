import Joi from 'joi';

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)

    .messages({
      'string.empty': 'Firstname is required',
      'string.max': 'Firstname can not be more than 20 characters',
      'string.custom': '{#label} must be capitalized',
    }),
  middleName: Joi.string().optional(),
  lastName: Joi.string().required().messages({
    'string.empty': 'Lastname is required',
  }),
});

const guardianvalidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'string.empty': 'Father contact number is required',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'string.empty': 'Mother contact number is required',
  }),
});

const localGuardianvalidatonSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Name is required',
  }),
  occupation: Joi.string().required().messages({
    'string.empty': 'Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Address is required',
  }),
});

const studentvalidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.empty': 'Student ID is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
  name: userNameSchema.required().messages({
    'any.required': 'Student name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': '{#label} is not a valid gender',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email',
    'string.empty': 'Email is required',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'any.only': '{#label} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required',
  }),
  guardian: guardianvalidationSchema.required().messages({
    'any.required': ' guardian information is required',
  }),
  localGuardian: localGuardianvalidatonSchema.required().messages({
    'any.required': 'Local guardian information is required',
  }),
  profileImage: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': '{#label} is not a valid status',
  }),
});

export default studentvalidationSchema;
