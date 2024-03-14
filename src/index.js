import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ComingSoon from './views/coming-soon'
import Connect from './views/connect'
import Home from './views/home'
import Plans from './views/plans'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Connect} exact path="/connect" />
        <Route component={Home} exact path="/" />
        <Route component={Plans} exact path="/plans" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
