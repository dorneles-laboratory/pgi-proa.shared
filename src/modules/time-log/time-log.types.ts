import { z } from '../../lib/registry';
import { createTimeLogSchema, timeLogResponseSchema } from './time-log.schemas';

export type CreateTimeLogDTO = z.infer<typeof createTimeLogSchema>;
export type TimeLogResponseDTO = z.infer<typeof timeLogResponseSchema>;
