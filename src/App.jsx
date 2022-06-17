import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import './App.css'
import { Profile } from './components/Profile';
import { ProfileEdit } from './components/ProfileEdit';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component={ Home } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App
