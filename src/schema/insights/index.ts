import { InsightsBestDayResponse } from './best-day';
import { InsightsCategoriesResponse } from './categories';
import { InsightsDailyAverageResponse } from './daily-average';
import { InsightsDaysResponse } from './days';
import { InsightsEditorsResponse } from './editors';
import { InsightsLanguagesResponse } from './languages';
import { InsightsMachinesResponse } from './machines';
import { InsightsOperatingSystemsResponse } from './operating-systems';
import { InsightsProjectsResponse } from './projects';
import { InsightsWeekdaysResponse } from './weekdays';

export * from './best-day';
export * from './categories';
export * from './daily-average';
export * from './days';
export * from './editors';
export * from './languages';
export * from './machines';
export * from './operating-systems';
export * from './projects';
export * from './weekdays';

export type InsightsType =
	| InsightsBestDayResponse
	| InsightsCategoriesResponse
	| InsightsDailyAverageResponse
	| InsightsDaysResponse
	| InsightsEditorsResponse
	| InsightsLanguagesResponse
	| InsightsMachinesResponse
	| InsightsOperatingSystemsResponse
	| InsightsProjectsResponse
	| InsightsWeekdaysResponse;
