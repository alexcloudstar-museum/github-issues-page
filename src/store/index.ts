import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import issuesReducer from 'store/reducers/issuesReducer';
import issueReducer from 'store/reducers/issueReducer';
// import commentsReducer from 'store/reducers/commentsReducer';
// import repoMDReducer from 'store/reducers/repoMDReducer';

const rootReducer = combineReducers({
  issues: issuesReducer,
  issue: issueReducer,
  // comments: commentsReducer,
  // repoMD: repoMDReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
