interface Category {
	name: string;
	total: number;
}

interface Day {
	date: string;
	total: number;
	categories: Category[];
}

export interface InsightsDaysResponse {
	days: Day[];
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
