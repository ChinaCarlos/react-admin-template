import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import DefaultLayout from '../../layuot/default/'
// 引入该模块下的子页面
import Analyse from './analyse/'
import Workplace from './workplace/'

class Index extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/home"
            render={() => {
              return <Redirect to="/home/analyse" />
            }}
          />
          <Route path="/home/analyse" component={Analyse} />
          <Route path="/home/workplace" component={Workplace} />
        </Switch>
      </Router>
    )
  }
}
export default withRouter(connect()(DefaultLayout(Index)))
