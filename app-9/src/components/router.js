import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import Signup from './Signup'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Details' component={Details}/>
      <Route path='/Signup' component={Signup}/>
    </Switch>
  </main>
)

export default router