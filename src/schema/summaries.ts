interface Language {
	name: string;
	total_seconds: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
	seconds: number;
	percent: number;
}

interface GrandTotal {
	hours: number;
	minutes: number;
	total_seconds: number;
	digital: string;
	decimal: string;
	text: string;
}

interface Editor {
	name: string;
	total_seconds: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
	seconds: number;
	percent: number;
}

interface OperatingSystem {
	name: string;
	total_seconds: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
	seconds: number;
	percent: number;
}

interface Category {
	name: string;
	total_seconds: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
	seconds: number;
	percent: number;
}

interface Dependency {
	name: string;
	total_seconds: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
	seconds: number;
	percent: number;
}

interface Machine {
	name: string;
	total_seconds: number;
	machine_name_id: string;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
	seconds: number;
	percent: number;
}

interface DailyAverage {
	holidays: number;
	days_minus_holidays: number;
	days_including_holidays: number;
	seconds: number;
	seconds_including_other_language: number;
	text: string;
	text_including_other_language: string;
}

export interface SummariesResponse {
	data: {
		languages: Language[];
		grand_total: GrandTotal;
		editors: Editor[];
		operating_systems: OperatingSystem[];
		categories: Category[];
		dependencies: Dependency[];
		machines: Machine[];
	}[];
	start: string;
	end: string;
	cumulative_total: {
		seconds: number;
		text: string;
		digital: string;
		decimal: string;
	};
	daily_average: DailyAverage;
}
