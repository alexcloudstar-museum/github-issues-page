import produce from 'immer';
import { ActionType } from '../actionTypes';
import { GithubAction, RepoMDState } from '../actions';

const initialState: RepoMDState = {
	data: null,
	loading: true
};

const reducer = produce(
	(state: RepoMDState = initialState, action: GithubAction): RepoMDState => {
		switch (action.type) {
			case ActionType.GET_MD:
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
