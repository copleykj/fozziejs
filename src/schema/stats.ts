interface Category {
	name: string;
	total_seconds: number;
	percent: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
}

interface Editor {
	name: string;
	total_seconds: number;
	percent: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
}

interface OperatingSystem {
	name: string;
	total_seconds: number;
	percent: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
}

interface Language {
	name: string;
	total_seconds: number;
	percent: number;
	digital: string;
	decimal: string;
	text: string;
	hours: number;
	minutes: number;
}

export interface StatsResponse {
	id: string;
	user_id: string;
	range: string;
	timeout: number;
	writes_only: boolean;
	holidays: number;
	status: string;
	human_readable_total_including_other_language: string;
	human_readable_daily_average: string;
	categories: Category[];
	human_readable_total: string;
	daily_average_including_other_language: number;
	is_already_updating: boolean;
	total_seconds_including_other_language: number;
	is_stuck: boolean;
	editors: Editor[];
	is_up_to_date: boolean;
	days_minus_holidays: number;
	percent_calculated: number;
	operating_systems: OperatingSystem[];
	days_including_holidays: number;
	daily_average: number;
	languages: Language[];
	human_readable_daily_average_including_other_language: string;
	is_up_to_date_pending_future: boolean;
	total_seconds: number;
	username: string;
	is_including_today: boolean;
	human_readable_range: string;
	is_coding_activity_visible: boolean;
	is_other_usage_visible: boolean;
}
