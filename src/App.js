import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home.js'
import Cases from './pages/Cases.js'
import Deaths from './pages/Deaths.js'
import NewCases from './pages/NewCases.js'
import NewDeaths from './pages/NewDeaths.js'
import About from './pages/About.js'
import Totals from './pages/Totals.js'

import UsersProvider from './UsersProvider'
import Header from './components/Header.js'

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";




function App() {


  return (
    <div className="App">
      <UsersProvider>
      <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/totals' component={Totals}/>
            <Route exact path='/cases' component={Cases} />
            <Route exact path='/deaths' component={Deaths} />
            <Route exact path='/new-cases' component={NewCases} />
            <Route exact path='/new-deaths' component={NewDeaths} />
            <Route exact path='/about' component={About} />

        </Switch>
      </Router>
      </UsersProvider>
    </div>
  );
}

export default App;
