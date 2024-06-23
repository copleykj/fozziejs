interface Project {
	id: string;
	name: string;
	color: string | null;
	last_heartbeat_at: string;
	created_at: string;
	badge: string | null;
	clients: any[]; // You can replace "any" with a more specific type if you have more information about the "clients" array
	repository: any; // Same here, replace "any" with a more specific type if available
	urlencoded_name: string;
	url: string;
	human_readable_last_heartbeat_at: string;
	has_public_url: boolean;
}

export interface ProjectsResponse {
	data: Project[];
}
