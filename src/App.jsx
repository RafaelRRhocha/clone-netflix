import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import './App.css'
import { Profile } from './components/Profile';
import { ProfileEdit } from './components/subComponents/ProfileEdit';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/home" render={ (props) => <Home { ...props } /> } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/profile/edit" component={ ProfileEdit } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App
