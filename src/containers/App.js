import React from 'react';
import './App.css';
import { Routes } from '../routes/index';
import { Router } from "react-router-dom";
import history from '../routes/history';
import LogRocket from 'logrocket';

LogRocket.init('avom2d/test');

LogRocket.identify('1234', {
  name: 'Marina Magdy',
  email: 'marinashafiq89@gmail.com',
});

const App = () => {
  return (
    <div className="App">
      <Router history={history}>{Routes}</Router>
    </div>
  );
}

export default App;
