import React, { useState, useEffect } from 'react';
import './App.scss';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// API
import { getIssues } from '../api';
import Issues from './Issues/Issues';
import Spinner from './Spinner/Spinner';
import Pagination from './Pagination/Pagination';
import Issue from './Issues/Issue';

const App = () => {
  const [issues, setIssues] = useState<[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [issuesPerPage] = useState<number>(10);

  useEffect(() => {
    getIssues().then(res => {
      setIssues(res);
      setLoading(false);
    });
  }, []);

  // get current issues
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='App'>
          <Router basename='/'>
            <Switch>
              <Route exact path='/'>
                <h1>Simplified version of Github’s Issues page</h1>
                <Issues issues={currentIssues} />
                <Pagination
                  issuesPerPage={issuesPerPage}
                  totalIssues={issues.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </Route>
              <Route path='/issue/:id' component={Issue} />
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
};

export default App;
