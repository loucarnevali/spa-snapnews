import { z } from 'zod';

export const newsSchema = z.object({
  title: z
    .string()
    .nonempty({ message: 'The title cannot be empty' })
    .refine((value) => !/^\s*$/.test(value), {
      message: 'The title cannot have only spaces',
    }),
  banner: z
    .string()
    .nonempty({ message: 'The banner link cannot be empty' })
    .refine((value) => !/^\s*$/.test(value), {
      message: 'The banner link cannot have only spaces',
    }),
  text: z
    .string()
    .nonempty({ message: 'Text cannot be empty' })
    .refine((value) => !/^\s*$/.test(value), {
      message: 'Text cannot have only spaces',
    }),
});
