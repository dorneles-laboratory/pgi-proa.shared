import { z, registry } from '../../lib/registry';
import { TimeLogNature } from './time-log.enums';
export const createTimeLogSchema = registry.register('CreateTimeLogRequest', z.object({
    taskId: z.string().uuid().openapi({
        description: 'ID da tarefa relacionada',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    date: z.coerce.date().openapi({
        description: 'Data em que o trabalho foi realizado',
        example: '2023-10-10',
    }),
    startTime: z
        .string()
        .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Formato deve ser HH:MM')
        .openapi({
        description: 'Hora de início',
        example: '14:00',
    }),
    endTime: z
        .string()
        .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Formato deve ser HH:MM')
        .openapi({
        description: 'Hora de fim',
        example: '16:30',
    }),
    nature: z.nativeEnum(TimeLogNature).openapi({
        description: 'Natureza da atividade',
        example: TimeLogNature.DEV,
    }),
    description: z.string().min(10).max(2000).openapi({
        description: 'Relato detalhado do que foi feito',
        example: 'Refatoração da camada de autenticação e ajuste de tipagens no shared.',
    }),
}));
export const timeLogResponseSchema = registry.register('TimeLogResponse', z.object({
    id: z.string().uuid(),
    taskId: z.string().uuid(),
    userId: z.string().uuid(),
    date: z.date(),
    startTime: z.string(),
    endTime: z.string(),
    loggedHours: z.number(),
    nature: z.nativeEnum(TimeLogNature),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
}));
//# sourceMappingURL=time-tracking.schemas.js.map