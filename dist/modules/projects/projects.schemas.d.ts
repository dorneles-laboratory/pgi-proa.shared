import { z } from '../../lib/registry';
export declare const createProjectSchema: z.ZodObject<{
    name: z.ZodString;
    memberIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const updateProjectSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    memberIds: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export declare const projectResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    ownerId: z.ZodString;
    members: z.ZodOptional<z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        role: z.ZodString;
        joinedAt: z.ZodDate;
    }, z.core.$strip>>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const projectIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=projects.schemas.d.ts.map