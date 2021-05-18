import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
	fetchIssueReadme,
	fetchIssues,
	getComments,
	getIssuePromise,
	renderIssueReadme
} from 'src/services/github';
import { ActionType } from '../actionTypes';
import { GithubAction, IComments, RepoMD } from '../actions';
import { RootState } from '../reducers';
import { IIssue } from '../types';

export const getIssues = (
	keyword: string
): ThunkAction<void, RootState, null, GithubAction> => {
	return async (dispatch: Dispatch<Action>) => {
		try {
			const res = await fetchIssues(keyword);

			const resData: IIssue[] = await res.data.items;

			dispatch({
				type: ActionType.GET_ISSUES,
				payload: resData
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export const getIssue = (
	id: number,
	keyword: string
): ThunkAction<void, RootState, null, GithubAction> => {
	return async (dispatch: Dispatch<Action>) => {
		try {
			const res = await getIssuePromise(id, keyword);

			const resData: IIssue = await res;

			dispatch({
				type: ActionType.GET_ISSUE,
				payload: resData
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export const getCommentsAction = (
	urlComments: string
): ThunkAction<void, RootState, null, GithubAction> => {
	return async (dispatch: Dispatch<Action>) => {
		try {
			const res = await getComments(urlComments);

			const resData: IComments[] = await res.data;

			dispatch({
				type: ActionType.GET_COMMENTS,
				payload: resData
			});
		} catch (err) {
			console.error(err);
		}
	};
};

export const getMD = (
	urlIssue: string
): ThunkAction<void, RootState, null, GithubAction> => {
	return async (dispatch: Dispatch<Action>) => {
		try {
			const fetchIssueReadmeData = await fetchIssueReadme(urlIssue);
			const issueReadmeUrl = fetchIssueReadmeData.data.download_url;
			const res = await renderIssueReadme(issueReadmeUrl);

			const resData: RepoMD = await res.data;

			dispatch({
				type: ActionType.GET_MD,
				payload: resData
			});
		} catch (err) {
			console.error(err);
		}
	};
};
