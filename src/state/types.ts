interface ILabel {
	color: string;
	default: boolean;
	id: number;
	name: string;
	description: string;
	node_id: string;
	url: string;
}

export interface IIssue {
	id: number;
	ticketNumber: string;
	labels: ILabel[] | [];
	title: string;
	created_at: string;
	body: string;
	state: string;
	user: {
		login: string;
	};
}
