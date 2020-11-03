import React, { useState, useEffect } from 'react';
import { getIssues } from '../api';
import './App.scss';

import RenderList from './RenderList/RenderList';

const App = () => {
  return (
    <div className='App'>
      <RenderList />
    </div>
  );
};

export default App;
