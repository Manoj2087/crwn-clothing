import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatPage = () => (
  <div>Hello Hat</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
