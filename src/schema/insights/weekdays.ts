interface Weekday {
	name: string;
	count: number;
	total: number;
	human_readable_total: string;
	average: number;
	human_readable_average: string;
	categories: Category[];
}

interface Category {
	name: string;
	total: number;
	human_readable_total: string;
	average: number;
	human_readable_average: string;
}

export interface InsightsWeekdaysResponse {
	weekdays: Weekday[];
	status: string;
	is_up_to_date: boolean;
	is_up_to_date_pending_future: boolean;
	is_stuck: boolean;
	is_already_updating: boolean;
	range: string;
	percent_calculated: number;
	timeout: number;
	writes_only: boolean;
	user_id: string;
	is_including_today: boolean;
	human_readable_range: string;
}
