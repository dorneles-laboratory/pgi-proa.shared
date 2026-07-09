import { z } from 'zod';
import {
  createUserSchema,
  updateUserSchema,
  userIdSchema,
} from './users.schemas';
import type { PaginatedResultDTO } from '../../common/pagination.js';

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
export type UserIdDTO = z.infer<typeof userIdSchema>;

export type SafeUserDTO = Omit<CreateUserDTO, 'password'> & {
  id: string;
  created_at: Date | string;
  updated_at: Date | string;
  deletedAt: Date | string | null;
};

export type PaginatedUsersDTO = PaginatedResultDTO<SafeUserDTO>;
