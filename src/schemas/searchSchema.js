import { z } from 'zod';

export const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: 'The search cannot be empty.' })
    .refine((value) => !/^\s*$/.test(value), {
      message: 'The search cannot have spaces.',
    }),
});
