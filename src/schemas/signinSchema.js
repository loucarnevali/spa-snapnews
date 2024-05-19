import { z } from 'zod';

export const signinSchema = z.object({
  email: z.string().email({ message: 'Invalid E-mail' }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: 'Password must have at least 6 characters' }),
});
