interface Total {
	seconds: number;
	text: string;
}

interface DailyAverage {
	seconds: number;
	text: string;
}

interface CurrentUser {
	total: Total;
	daily_average: DailyAverage;
}

interface AllUsersTotal {
	average: number;
	text: string;
	max: number;
	median: number;
}

interface AllUsersDailyAverage {
	average: number;
	text: string;
	max: number;
	median: number;
}

interface AllUsers {
	total: AllUsersTotal;
	daily_average: AllUsersDailyAverage;
}

export interface InsightsDailyAverageResponse {
	current_user: CurrentUser;
	all_users: AllUsers;
	status: string;
	is_up_to_date: boolean;
	is_up_to_date_pending_future: boolean;
	is_stuck: boolean;
	is_already_updating: boolean;
	range: string;
	percent_calculated: number;
	timeout: number;
	writes_only: boolean;
	holidays: number;
	days_including_holidays: number;
	days_minus_holidays: number;
	user_id: string;
	is_including_today: boolean;
	human_readable_range: string;
}
