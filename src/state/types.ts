interface labels {
	color: string;
	id: number;
	name: string;
}

export interface IIssue {
	id: number;
	text: string;
	isOpen: boolean;
	ticketNumber: string;
	labels: labels[];
	state: string;
	title: string;
	created_at: string;
	user: {
		login: string;
	};
}
