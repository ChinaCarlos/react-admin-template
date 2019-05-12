import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DefaultLayout from '../../layuot/default/'

import Login from './login'
class Index extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home/login" component={Login} />
        </Switch>
      </Router>
    )
  }
}
export default DefaultLayout(Index)
