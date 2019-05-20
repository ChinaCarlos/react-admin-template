import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DefaultLayout from '../../layuot/default'
// 引入该模块下的子页面
const Analyse = lazy(() => import('../../views/analyse'))
const Workplace = lazy(() => import('../../views/workplace'))
const Monitor = lazy(() => import('../../views/monitor'))
class Dashboard extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() => {
              return <Redirect to="/dashboard/analyse" />
            }}
          />
          <Route path="/dashboard/analyse" component={Analyse} />
          <Route path="/dashboard/workplace" component={Workplace} />
          <Route path="/dashboard/monitor" component={Monitor} />
        </Switch>
      </Suspense>
    )
  }
}
export default withRouter(connect()(DefaultLayout(Dashboard)))
