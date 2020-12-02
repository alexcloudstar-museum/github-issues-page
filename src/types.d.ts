type IssuesProps = {
  issues: any;
  loading: boolean;
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
