export declare const ProjectStatus: {
    readonly Draft: "draft";
    readonly Active: "active";
    readonly OnHold: "on_hold";
    readonly Completed: "completed";
    readonly Canceled: "cancelled";
};
export type EnumProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const ProjectPriority: {
    readonly Low: "low";
    readonly Medium: "medium";
    readonly High: "high";
    readonly Critical: "critical";
};
export type EnumProjectPriority = (typeof ProjectPriority)[keyof typeof ProjectPriority];
//# sourceMappingURL=projects.enums.d.ts.map