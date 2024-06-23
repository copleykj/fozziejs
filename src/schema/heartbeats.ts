export interface HeartbeatsResponse {
	data: Heartbeat[];
}

interface Heartbeat {
	id: string;
	entity: string;
	type: string;
	time: number;
	project: string;
	project_root_count: number;
	branch: string;
	language: string;
	dependencies: string[];
	lines: number;
	lineno: number;
	cursorpos: number;
	is_write: boolean | null;
	category: string;
	created_at: string;
	user_id: string;
	user_agent_id: string;
	machine_name_id: string;
}
