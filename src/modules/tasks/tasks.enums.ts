export const TaskStatus = {
  Pending: 'pending',
  InProgress: 'in_progress',
  InReview: 'in_review',
  Completed: 'completed',
  Archived: 'archived',
} as const;

export type EnumTaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

export const TaskPriority = {
  Low: 'low',
  Medium: 'medium',
  High: 'high',
  Urgent: 'urgent',
} as const;

export type EnumTaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];
