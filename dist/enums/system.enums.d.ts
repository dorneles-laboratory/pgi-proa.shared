export declare const SystemEnums: {
    Status: {
        readonly Active: "active";
        readonly Archived: "archived";
        readonly Canceled: "cancelled";
        readonly Completed: "completed";
        readonly Deleted: "deleted";
        readonly InProgress: "in_progress";
        readonly InReview: "in_review";
        readonly OnHold: "on_hold";
        readonly Pending: "pending";
        readonly Reopened: "reopened";
        readonly WaitingForReview: "waiting_for_review";
        readonly WaitingForApproval: "waiting_for_approval";
        readonly WaitingForFeedback: "waiting_for_feedback";
        readonly WaitingForResources: "waiting_for_resources";
        readonly WaitingForDependencies: "waiting_for_dependencies";
    };
    Priority: {
        readonly Undefined: "undefined";
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Urgent: "urgent";
        readonly Critical: "critical";
    };
    ApprovalStatus: {
        readonly Approved: "approved";
        readonly Pending: "pending";
        readonly Rejected: "rejected";
    };
};
export type EnumStatus = (typeof SystemEnums.Status)[keyof typeof SystemEnums.Status];
export type EnumPriority = (typeof SystemEnums.Priority)[keyof typeof SystemEnums.Priority];
export type EnumApprovalStatus = (typeof SystemEnums.ApprovalStatus)[keyof typeof SystemEnums.ApprovalStatus];
type CreationStatusObject = Pick<typeof SystemEnums.Status, 'Pending' | 'InProgress' | 'OnHold' | 'WaitingForApproval' | 'WaitingForResources' | 'WaitingForDependencies'>;
export type EnumCreationStatus = CreationStatusObject[keyof CreationStatusObject];
export {};
//# sourceMappingURL=system.enums.d.ts.map