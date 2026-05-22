export const SystemEnums = {
  Status: {
    Active: 'active',
    Archived: 'archived',
    Canceled: 'cancelled',
    Completed: 'completed',
    Deleted: 'deleted',
    InProgress: 'in_progress',
    InReview: 'in_review',
    OnHold: 'on_hold',
    Pending: 'pending',
    Reopened: 'reopened',
    WaitingForReview: 'waiting_for_review',
    WaitingForApproval: 'waiting_for_approval',
    WaitingForFeedback: 'waiting_for_feedback',
    WaitingForResources: 'waiting_for_resources',
    WaitingForDependencies: 'waiting_for_dependencies',
  } as const,

  Priority: {
    Undefined: 'undefined',
    Low: 'low',
    Medium: 'medium',
    High: 'high',
    Urgent: 'urgent',
    Critical: 'critical',
  } as const,

  ApprovalStatus: {
    Approved: 'approved',
    Pending: 'pending',
    Rejected: 'rejected',
  } as const,
};

export type EnumStatus =
  (typeof SystemEnums.Status)[keyof typeof SystemEnums.Status];
export type EnumPriority =
  (typeof SystemEnums.Priority)[keyof typeof SystemEnums.Priority];
export type EnumApprovalStatus =
  (typeof SystemEnums.ApprovalStatus)[keyof typeof SystemEnums.ApprovalStatus];

type CreationStatusObject = Pick<
  typeof SystemEnums.Status,
  | 'Pending'
  | 'InProgress'
  | 'OnHold'
  | 'WaitingForApproval'
  | 'WaitingForResources'
  | 'WaitingForDependencies'
>;
export type EnumCreationStatus =
  CreationStatusObject[keyof CreationStatusObject];
