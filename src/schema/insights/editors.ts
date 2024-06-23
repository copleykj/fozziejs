interface Editor {
	name: string;
	total_seconds: number;
}

export interface InsightsEditorsResponse {
	status: string;
	is_up_to_date: boolean;
	is_up_to_date_pending_future: boolean;
	is_stuck: boolean;
	is_already_updating: boolean;
	range: string;
	percent_calculated: number;
	timeout: number;
	writes_only: boolean;
	editors: Editor[];
	user_id: string;
	is_including_today: boolean;
	human_readable_range: string;
}
