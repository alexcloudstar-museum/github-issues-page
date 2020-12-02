import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { GithubAction, GET_COMMENTS, Comments } from 'store/types';
import { getComments } from 'api';

export const getCommentsAction = (
  urlComments: string
): ThunkAction<void, RootState, null, GithubAction> => {
  return async dispatch => {
    try {
      const res = await getComments(urlComments);

      const resData: Comments[] = await res.data;

      dispatch({
        type: GET_COMMENTS,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
