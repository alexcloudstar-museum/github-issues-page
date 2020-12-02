import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { GithubAction, GET_MARKDOWN, RepoMD } from 'store/types';
import { fetchIssueReadme, renderIssueReadme } from 'api';

export const getMarkdown = (
  urlIssue: string
): ThunkAction<void, RootState, null, GithubAction> => {
  return async dispatch => {
    try {
      const fetchIssueReadmeData = await fetchIssueReadme(urlIssue);
      const issueReadmeUrl = fetchIssueReadmeData.data.download_url;
      const res = await renderIssueReadme(issueReadmeUrl);

      const resData: RepoMD = await res.data;

      dispatch({
        type: GET_MARKDOWN,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
