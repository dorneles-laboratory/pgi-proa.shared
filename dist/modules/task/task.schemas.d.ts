import { z } from '../../lib/registry';
import type { PaginatedResultDTO } from '../../common/pagination.js';
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
    status: z.ZodOptional<z.ZodEnum<{
        readonly Pending: "pending";
        readonly InProgress: "in_progress";
        readonly InReview: "in_review";
        readonly Completed: "completed";
        readonly Archived: "archived";
    }>>;
    assigneeId: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    estimatedHours: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    collaboratorIds: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
export declare const taskResponseSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    projectId: z.ZodString;
    status: z.ZodEnum<{
        readonly Pending: "pending";
        readonly InProgress: "in_progress";
        readonly InReview: "in_review";
        readonly Completed: "completed";
        readonly Archived: "archived";
    }>;
    priority: z.ZodEnum<{
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Urgent: "urgent";
    }>;
    dueDate: z.ZodNullable<z.ZodDate>;
    assigneeId: z.ZodNullable<z.ZodString>;
    estimatedHours: z.ZodNullable<z.ZodNumber>;
    collaboratorIds: z.ZodNullable<z.ZodArray<z.ZodString>>;
    createdById: z.ZodString;
    closedById: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export declare const taskIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type CreateTaskDTO = z.infer<typeof createTaskSchema>;
export type UpdateTaskDTO = z.infer<typeof updateTaskSchema>;
export type TaskResponseDTO = z.infer<typeof taskResponseSchema>;
export type TaskIdDTO = z.infer<typeof taskIdSchema>;
export type PaginatedTasksDTO = PaginatedResultDTO<TaskResponseDTO>;
//# sourceMappingURL=task.schemas.d.ts.map