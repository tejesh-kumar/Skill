import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Skill from './components/Skill';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/skill' component={Skill} />
    </Switch>
  );
}

export default App;
