import { z } from '../../lib/registry';
import {
  createTimeLogSchema,
  timeLogResponseSchema,
} from './time-tracking.schemas';

export type CreateTimeLogDTO = z.infer<typeof createTimeLogSchema>;
export type TimeLogResponseDTO = z.infer<typeof timeLogResponseSchema>;
