import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(10),
});

// 2. Types (Input DTO)
export type PaginationQueryDTO = z.infer<typeof paginationSchema>;

export interface PaginatedResultDTO<T> {
  totalItems: number;
  data: T[];
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}
