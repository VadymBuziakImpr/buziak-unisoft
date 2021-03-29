import React from 'react'
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'
import Login from './pages/Login'
import Users from './pages/Users'

function App () {
  return (
    <Router>
      <div className="container">
        <main>
          <Switch>
            <Redirect exact from="/" to="/login"/>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/home/users">
              <Users/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
