import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
