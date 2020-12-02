import React, { useMemo, useState } from 'react';
import GlobalStyles from '../globalStyles';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// API
import Issues from './Issues/Issues';
import Pagination from './Pagination/Pagination';
import Issue from './Issues/Issue';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getIssues } from 'store/actions/issuesAction';

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [issuesPerPage] = useState<number>(10);

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.issues);

  useMemo(() => dispatch(getIssues()), [dispatch]);

  // get current issues
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = data && data.slice(indexOfFirstIssue, indexOfLastIssue);

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <Router basename='/'>
          <Switch>
            <Route exact path='/'>
              <h1>Simplified version of Github’s Issues page</h1>
              <Issues issues={currentIssues} loading={loading} />
              {data && (
                <Pagination
                  issuesPerPage={issuesPerPage}
                  totalIssues={data.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              )}
            </Route>
            <Route path='/issue/:id' component={Issue} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default React.memo(App);
