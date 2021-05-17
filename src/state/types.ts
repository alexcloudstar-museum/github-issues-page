export interface IIssue {
	id: number;
	ticketNumber: string;
	labels: any;
	title: string;
	created_at: string;
	user: {
		login: string;
	};
}
