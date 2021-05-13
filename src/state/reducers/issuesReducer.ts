import produce from 'immer';
import { ActionType } from '../action-types';
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
		}
	}
);

export default reducer;
