import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';
import Report from './Report.js';

import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Me</Link>
          </li>
          <li>
            <Link to="/report/kmom01">kmom01</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Me} />
      <Route path="/report/:kmom" component={Report} />
    </div>
  </Router>
);

export default App;
