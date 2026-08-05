import { z } from '@lib/shared';
import { dashboardResponseSchema } from './dashboard.schemas';
export type DashboardResponseDTO = z.infer<typeof dashboardResponseSchema>;
