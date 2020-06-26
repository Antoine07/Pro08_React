import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Denomination from './components/Denomination';
import Configuration from './components/Configuration';

const App = () => {
  return (

    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/configuration">
                Configuration
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Denomination />
          </Route>
          <Route exact path="/configuration">
            <Configuration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;