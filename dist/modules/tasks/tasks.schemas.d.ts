import { z } from '../../lib/registry';
export declare const createTaskSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    projectId: z.ZodString;
    priority: z.ZodDefault<z.ZodEnum<{
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Urgent: "urgent";
    }>>;
    dueDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export declare const updateTaskSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    projectId: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Urgent: "urgent";
    }>>>;
    dueDate: z.ZodOptional<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
export declare const taskResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    projectId: z.ZodString;
    priority: z.ZodEnum<{
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Urgent: "urgent";
    }>;
    dueDate: z.ZodNullable<z.ZodDate>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const taskIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=tasks.schemas.d.ts.map