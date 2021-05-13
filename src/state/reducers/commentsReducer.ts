import produce from 'immer';
import { ActionType } from '../actionTypes';
import { GithubAction, CommentsState } from '../actions';

const initialState: CommentsState = {
	data: null,
	loading: true
};

const reducer = produce(
	(
		state: CommentsState = initialState,
		action: GithubAction
	): CommentsState => {
		switch (action.type) {
			case ActionType.GET_COMMENTS:
				state = {
					data: action.payload,
					loading: false
				};
				return state;
			default:
				return state;
		}
	}
);

export default reducer;
