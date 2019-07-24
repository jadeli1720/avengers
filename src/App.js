import React from 'react';
import { Route, NavLink } from 'react-router-dom';
// import { useState } from 'react';

import './App.css';

import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengerPage from './components/AvengerPage';
import { avengers } from './Data/Data';


function App() {
  
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to='/' activeClassName="activeNavButton" >Home</NavLink>
        </li>
        <li>
          <NavLink to='/avengers' activeClassName="activeNavButton" >Avengers</NavLink>
        </li>
      </ul>

      {/*Think this every time you want to setup a route: What component do you want mounted when a users asks for what url path? */}
      
      {/* <Route exact path='/' component={Home} />
      <Route exact path='/avengers' component={AvengersList} />
      <Route path="/avengers/:id" component={AvengerPage} /> */}

      {/* Refactored above code to use render props */}

      <Route exact path='/' component={Home} />
      <Route exact path='/avengers' render={props => <AvengersList {...props} avengers={avengers}/>} />
    <Route path="/avengers/:id" render={props => <AvengerPage {...props} avengers={avengers} />} />

      {/* {console.log(avengers)/**Test to see if we were grabbing data from Data.js */} 

    </div>
  );
}

export default App;
