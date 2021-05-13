import { ActionType } from '../actionTypes';
import { IIssue } from '../types';

export interface IssuesState {
	data: IIssue[] | null;
	loading: boolean;
}

export interface GetIssuesAction {
	type: ActionType.GET_ISSUES;
	payload: IIssue[];
}

export interface Issue {
	repository_url: string;
	comments_url: string;
}

export interface IssueState {
	data: Issue | null;
	loading: boolean;
}

export interface GetIssueAction {
	type: ActionType.GET_ISSUE;
	payload: Issue;
}

export interface IComments {
	commentsURL: string;
}

export interface CommentsState {
	data: IComments[] | null;
	loading: boolean;
}

export interface GetCommentsAction {
	type: ActionType.GET_COMMENTS;
	payload: IComments[];
}

export interface RepoMD {
	repoURL: string;
}

export interface RepoMDState {
	data: RepoMD | null;
	loading: boolean;
}

export interface GetRepoMDAction {
	type: ActionType.GET_MD;
	payload: RepoMD;
}

export type GithubAction =
	| GetIssuesAction
	| GetIssueAction
	| GetCommentsAction
	| GetRepoMDAction;
