import { GithubAction, GET_MARKDOWN, RepoMDState } from 'store/types';

const initialState: RepoMDState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GithubAction): RepoMDState => {
  switch (action.type) {
    case GET_MARKDOWN:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
