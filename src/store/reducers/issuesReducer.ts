import { GithubAction, GET_ISSUES, IssuesState } from 'store/types';

const initialState: IssuesState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GithubAction): IssuesState => {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
