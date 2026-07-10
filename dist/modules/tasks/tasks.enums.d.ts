export declare const TaskStatus: {
    readonly Pending: "pending";
    readonly InProgress: "in_progress";
    readonly InReview: "in_review";
    readonly Completed: "completed";
    readonly Archived: "archived";
};
export type EnumTaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const TaskPriority: {
    readonly Low: "low";
    readonly Medium: "medium";
    readonly High: "high";
    readonly Urgent: "urgent";
};
export type EnumTaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];
//# sourceMappingURL=tasks.enums.d.ts.map