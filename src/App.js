import React, { useState } from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect, NavLink, Link} from 'react-router-dom';
import MovieApp from './Pages/MoviePage';
import WeatherApp from './Pages/WeatherPage';

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route path='/moviePage' component={MovieApp}></Route>
          <Route path='/weather' component={WeatherApp}></Route>
          <Redirect to="/"></Redirect> 
        </Switch>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/moviePage" className="linksForPages">MovieApp</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/weather" className="linksForPages">Weather</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  )
}



export default App;
