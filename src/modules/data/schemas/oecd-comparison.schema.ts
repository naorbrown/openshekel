import { z } from 'zod/v4';

export const OecdComparisonSchema = z.object({
  lastUpdated: z.string().nullable(),
  governmentEfficiency: z.object({
    israel: z.number().min(0).max(100).nullable(),
    oecdAverage: z.number().min(0).max(100).nullable(),
  }),
});

export type OecdComparisonData = z.infer<typeof OecdComparisonSchema>;
