export declare const TaskStatus: {
    readonly Pending: "pending";
    readonly InProgress: "in_progress";
    readonly InReview: "in_review";
    readonly Completed: "completed";
    readonly Archived: "archived";
};
export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];
export declare const TaskPriority: {
    readonly Low: "low";
    readonly Medium: "medium";
    readonly High: "high";
    readonly Urgent: "urgent";
};
export type TaskPriority = typeof TaskPriority[keyof typeof TaskPriority];
//# sourceMappingURL=task.enums.d.ts.map