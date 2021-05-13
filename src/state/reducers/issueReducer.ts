import produce from 'immer';
import { ActionType } from '../actionTypes';
import { GithubAction, IssueState } from '../actions';

const initialState: IssueState = {
	data: null,
	loading: true
};

const reducer = produce(
	(state: IssueState = initialState, action: GithubAction): IssueState => {
		switch (action.type) {
			case ActionType.GET_ISSUE:
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
