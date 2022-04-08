import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

function App() {
  

  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route path='/sign-in' component={ SignIn } />
      <Route path='/dashboard/:name' component={ Dashboard } />
    </Switch>
  );
}

export default App;
