import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { GithubAction, GET_ISSUES, SET_LOADING, Issues } from 'store/types';
import { url, githubToken, fetchIssues } from 'api';

export const getIssues = (): ThunkAction<
  void,
  RootState,
  null,
  GithubAction
> => {
  return async dispatch => {
    try {
      const res = await fetchIssues();

      const resData: Issues[] = await res.data.items;

      dispatch({
        type: GET_ISSUES,
        payload: resData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setLoading = (): GithubAction => {
  return {
    type: SET_LOADING,
  };
};
