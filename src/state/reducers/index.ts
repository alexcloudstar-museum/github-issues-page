import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import issueReducer from './issueReducer';
import issuesReducer from './issuesReducer';
import repoMDReducer from './repoMDReducer';

const reducers = combineReducers({
	issues: issuesReducer,
	issue: issueReducer,
	comments: commentsReducer,
	repoMD: repoMDReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
