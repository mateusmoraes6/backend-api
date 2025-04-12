import { z } from 'zod';
import Task from '../models/Task.js';

export const taskSchema = z.object({
    title: z.string().min(3, { message: 'O título deve ter pelo menos 3 caracteres.' })
        .refine(async (title) => {
            const existingTask = await Task.findOne({ title });
            return !existingTask; // true se não existir, false se existir
        }, {
            message: 'O título já existe.',
        }),
    description: z.string().optional(),
    completed: z.boolean({ required_error: 'O campo completed é obrigatório.' }),
});
