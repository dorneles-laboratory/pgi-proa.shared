import { AuthEnums, type EnumLoginStatus } from './auth.enums.js';
import {
  SystemEnums,
  type EnumStatus,
  type EnumPriority,
  type EnumApprovalStatus,
  type EnumCreationStatus,
} from './system.enums.js';

// Objeto único unificado combinando todos os sub-domínios
export const Enums = {
  ...AuthEnums,
  ...SystemEnums,
} as const;

// Re-exporta os tipos para que fiquem disponíveis na raiz
export type {
  EnumLoginStatus,
  EnumStatus,
  EnumPriority,
  EnumApprovalStatus,
  EnumCreationStatus,
};
