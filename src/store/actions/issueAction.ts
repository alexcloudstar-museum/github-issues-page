import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { GithubAction, GET_ISSUE, Issue } from 'store/types';
import { getIssuePromise } from 'api';

export const getIssue = (
  id: number
): ThunkAction<void, RootState, null, GithubAction> => {
  return async dispatch => {
    try {
      const res = await getIssuePromise(id);

      const resData: Issue = await res;

      dispatch({
        type: GET_ISSUE,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
