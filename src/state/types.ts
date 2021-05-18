interface labels {
	color: string;
	id: number;
	name: string;
}

export interface IIssue {
	id: number;
	ticketNumber: string;
	labels: labels[];
	title: string;
	created_at: string;
	body: string;
	state: string;
	user: {
		login: string;
	};
}
