import { z } from 'zod/v4';

const TimeSeriesPointSchema = z.object({
  year: z.number().int().min(2000),
  israel: z.number().min(0),
  oecdAverage: z.number().min(0),
});

export const OecdTimeseriesSchema = z.object({
  lastUpdated: z.string().nullable(),
  taxToGDP: z.array(TimeSeriesPointSchema),
});

export type OecdTimeseriesData = z.infer<typeof OecdTimeseriesSchema>;
