import React from 'react'
import Index from './pages/Home/'
import About from './pages/About/'
import Conact from './pages/Conact/'
import NoFound from './pages/NoFound/'
import Login from './pages/Login/'
import Register from './pages/Register/'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {
  render() {
    const isSignIn = false
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return isSignIn ? <Redirect to="/home" /> : <Login />
            }}
          />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/conact" component={Conact} />
          <Route component={NoFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
