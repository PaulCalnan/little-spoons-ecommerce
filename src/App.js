import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TreatCategoryOne = () => (
  <div>
    <h1>Treat Category One</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/treat-category-1' component={TreatCategoryOne} />
      </Switch>
    </div>
  );
}

export default App;
