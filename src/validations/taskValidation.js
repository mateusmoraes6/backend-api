import { z } from 'zod';

export const taskSchema = z.object({
    title: z.string().min(3, { message: 'O título deve ter pelo menos 3 caracteres.' }),
    description: z.string().optional(),
    completed: z.boolean({ required_error: 'O campo completed é obrigatório.' }),
});
