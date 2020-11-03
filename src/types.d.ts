type IssueProps = {
  id: number;
  text: string;
  isOpen: boolean;
  ticketNumber: string;
  badges: {
    color: string;
    text: string;
  }[];
};
