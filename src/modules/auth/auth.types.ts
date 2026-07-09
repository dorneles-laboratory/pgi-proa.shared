import { z } from 'zod';
import { loginSchema } from './auth.schemas';

export interface TokenPayloadDTO {
  sub: string;
}

export type LoginAuthDTO = z.infer<typeof loginSchema>;
