import { GithubAction, GET_ISSUE, IssueState } from 'store/types';

const initialState: IssueState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GithubAction): IssueState => {
  switch (action.type) {
    case GET_ISSUE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
