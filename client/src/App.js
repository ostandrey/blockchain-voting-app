import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Navbar from './Navbar';
import Voting from './components/Voting';
import About from "./components/About";
import Home from './components/Home';
import Account from './components/Account';

function App() {

  
  return (
    <div className='h-100'>
      <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/vote'>
          <Voting></Voting>
        </Route>
        <Route path='/account' component={Account}>
          <Account></Account>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
