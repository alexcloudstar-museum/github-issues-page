type IssuesProps = {
  issues: {
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
  }[];
};

type IssueProps = {
  match: {
    params: {
      id: number;
    };
  };
};
type issueProps = {
  repository_url: string;
  comments_url: string;
};

type CommentsProps = {
  commentsURL: string;
};

type MarkDownProps = {
  repoURL: string;
};

type PaginationProps = {
  issuesPerPage: number;
  totalIssues: number;
  paginate: (pageNumber) => pageNumber;
  currentPage: number;
};
