/**
 * Enums global object, exports all domains used within the system.
 */
export declare const AuthEnums: {
    LoginStatus: {
        readonly Pending: "pending";
        readonly Authenticated: "authenticated";
        readonly Unauthenticated: "unauthenticated";
    };
};
export type EnumLoginStatus = (typeof AuthEnums.LoginStatus)[keyof typeof AuthEnums.LoginStatus];
//# sourceMappingURL=auth.enums.d.ts.map