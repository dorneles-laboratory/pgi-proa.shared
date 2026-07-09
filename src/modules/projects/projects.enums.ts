export const ProjectStatus = {
  Draft: 'draft',
  Active: 'active',
  OnHold: 'on_hold',
  Completed: 'completed',
  Canceled: 'cancelled',
} as const;

export type EnumProjectStatus =
  (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const ProjectPriority = {
  Low: 'low',
  Medium: 'medium',
  High: 'high',
  Critical: 'critical',
} as const;

export type EnumProjectPriority =
  (typeof ProjectPriority)[keyof typeof ProjectPriority];
