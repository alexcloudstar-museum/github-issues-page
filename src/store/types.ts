export const GET_ISSUES = 'GET_ISSUES';
export const GET_ISSUE = 'GET_ISSUE';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_MARKDOWN = 'GET_MARKDOWN';
export const SET_LOADING = 'SET_LOADING';

export interface Issues {
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

export interface IssuesState {
  data: Issues[] | null;
  loading: boolean;
}

interface GetIssuesAction {
  type: typeof GET_ISSUES;
  payload: Issues[];
}

export interface Issue {
  repository_url: string;
  comments_url: string;
}

export interface IssueState {
  data: Issue;
  loading: boolean;
}

interface GetIssueAction {
  type: typeof GET_ISSUE;
  payload: Issue;
}

export interface Comments {
  commentsURL: string;
}

export interface CommentsState {
  data: Comments;
}

interface GetCommentsAction {
  type: typeof GET_COMMENTS;
  payload: Comments;
}

export interface RepoMD {
  repoURL: string;
}

export interface RepoMDState {
  data: RepoMD;
}

interface GetRepoMDAction {
  type: typeof GET_MARKDOWN;
  payload: RepoMD;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type GithubAction =
  | GetIssuesAction
  | GetIssueAction
  | GetCommentsAction
  | GetRepoMDAction
  | SetLoadingAction;
