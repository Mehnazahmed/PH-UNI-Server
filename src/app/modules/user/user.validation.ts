import { z } from 'zod';

const userSchema = z.object({
  id: z.string().nonempty('User ID is required'),
  password: z
    .string({ invalid_type_error: 'Password must be string' })
    .nonempty('Password is required')
    .max(20, { message: 'Password cannot be more than 20 characters' })
    .optional(),
});

export default userSchema;
