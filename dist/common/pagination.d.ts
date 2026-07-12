import { z } from '@lib/shared';
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type PaginationQueryDTO = z.infer<typeof paginationSchema>;
export interface PaginatedResultDTO<T> {
    totalItems: number;
    data: T[];
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
}
//# sourceMappingURL=pagination.d.ts.map