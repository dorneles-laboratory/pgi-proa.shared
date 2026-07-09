/**
 * Enums global object, exports all domains used within the system.
 */
export const AuthEnums = {
  LoginStatus: {
    Pending: 'pending',
    Authenticated: 'authenticated',
    Unauthenticated: 'unauthenticated',
  } as const,
};

// Export the types to control values.
export type EnumLoginStatus =
  (typeof AuthEnums.LoginStatus)[keyof typeof AuthEnums.LoginStatus];
