import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Reviews from './Reviews';
import Dashboard from './Dashboard';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/reviews'>
          <Reviews />
        </Route>
        <Route path='/about-me'>
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
