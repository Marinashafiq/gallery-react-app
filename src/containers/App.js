import React from 'react';
import './App.css';
import { Routes } from '../routes/index';
import { Router } from "react-router-dom";
import history from '../routes/history';

const App = () => {
  console.log("ROUTES")
  return (
    <div className="App">
      <Router history={history}>{Routes}</Router>
    </div>
  );
}

export default App;
