import { z } from '../../lib/registry';
import type { PaginatedResultDTO } from '../../common/pagination.js';
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodPipe<z.ZodEmail, z.ZodTransform<string, string>>;
    password: z.ZodString;
    is_active: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodPipe<z.ZodEmail, z.ZodTransform<string, string>>>;
    password: z.ZodOptional<z.ZodString>;
    is_active: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const userIdSchema: z.ZodObject<{
    id: z.ZodUUID;
}, z.core.$strip>;
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
//# sourceMappingURL=user.schemas.d.ts.map