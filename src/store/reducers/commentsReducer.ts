import { GithubAction, GET_COMMENTS, CommentsState } from 'store/types';

const initialState: CommentsState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GithubAction): CommentsState => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
