import { z } from 'zod';
import {
  createTaskSchema,
  updateTaskSchema,
  taskResponseSchema,
  taskIdSchema,
} from './tasks.schemas';
import type { PaginatedResultDTO } from '../../common/pagination.js';

export type CreateTaskDTO = z.infer<typeof createTaskSchema>;
export type UpdateTaskDTO = z.infer<typeof updateTaskSchema>;
export type TaskResponseDTO = z.infer<typeof taskResponseSchema>;
export type TaskIdDTO = z.infer<typeof taskIdSchema>;
export type PaginatedTasksDTO = PaginatedResultDTO<TaskResponseDTO>;
