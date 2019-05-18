import React, { Component, Suspense, lazy } from 'react'
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
const Analyse = lazy(() => import('./analyse/'))
const Workplace = lazy(() => import('./workplace/'))
class Index extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading</div>}>
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
      </Suspense>
    )
  }
}
export default withRouter(connect()(DefaultLayout(Index)))
