import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'Name must have at least 3 characters' })
      .transform((name) =>
        name
          .trim()
          .split(' ')
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(' '),
      ),
    email: z.string().email({ message: 'Invalid E-mail' }).toLowerCase(),
    password: z.string().min(6, 'Password must have at least 6 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must have at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
