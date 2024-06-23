interface Duration {
	time: number;
	project: string;
	duration: number;
	color: null;
}

export interface DurationsResponse {
	data: Duration[];
	branches: string[];
	start: string;
	end: string;
	timezone: string;
}
