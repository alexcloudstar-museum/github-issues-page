export interface IIssue {
	id: number;
	text: string;
	isOpen: boolean;
	ticketNumber: string;
	badges: {
		color: string;
		text: string;
	}[];
	labels: {
		length: number;
		color: string;
		id: number;
		name: string;
	}[];
	state: string;
	title: string;
	created_at: string;
	user: {
		login: string;
	};
}
