import { z } from '../../lib/registry';
export declare const createProjectSchema: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export declare const updateProjectSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const projectResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        readonly Draft: "draft";
        readonly Active: "active";
        readonly OnHold: "on_hold";
        readonly Completed: "completed";
        readonly Canceled: "cancelled";
    }>;
    priority: z.ZodEnum<{
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Critical: "critical";
    }>;
    startDate: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const projectIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=projects.schemas.d.ts.map