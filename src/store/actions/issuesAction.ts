import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { GithubAction, GET_ISSUES, Issues } from 'store/types';
import { fetchIssues } from 'api';

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
      console.error(err);
    }
  };
};
