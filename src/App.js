import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom'

import {firebaseAuth} from './provider/AuthProvider' 
import AppBar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Signin from './components/Signin'
import './App.css';

function App() {

  const {token} = useContext(firebaseAuth);
  console.log(token)

  return (
    <>
      <AppBar />

    <Switch>
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/signin' component={token === null ? Signin : Home} />
      <Route exact path='/signup' component={token === null ? Signup : Home} />
      <Route exact path='/' component={Home} />
    </Switch>
    </>
  );
}

export default App;
