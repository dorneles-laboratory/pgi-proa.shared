import { type EnumLoginStatus } from './auth.enums.js';
import { type EnumStatus, type EnumPriority, type EnumApprovalStatus, type EnumCreationStatus } from './system.enums.js';
export declare const Enums: {
    readonly Status: {
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
    readonly Priority: {
        readonly Undefined: "undefined";
        readonly Low: "low";
        readonly Medium: "medium";
        readonly High: "high";
        readonly Urgent: "urgent";
        readonly Critical: "critical";
    };
    readonly ApprovalStatus: {
        readonly Approved: "approved";
        readonly Pending: "pending";
        readonly Rejected: "rejected";
    };
    readonly LoginStatus: {
        readonly Pending: "pending";
        readonly Authenticated: "authenticated";
        readonly Unauthenticated: "unauthenticated";
    };
};
export type { EnumLoginStatus, EnumStatus, EnumPriority, EnumApprovalStatus, EnumCreationStatus, };
//# sourceMappingURL=index.d.ts.map