import produce from 'immer';
import { ActionType } from '../actionTypes';
import { GithubAction, IssuesState } from '../actions';

const initialState: IssuesState = {
	data: null,
	loading: true
};

const reducer = produce(
	(state: IssuesState = initialState, action: GithubAction): IssuesState => {
		switch (action.type) {
			case ActionType.GET_ISSUES:
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
