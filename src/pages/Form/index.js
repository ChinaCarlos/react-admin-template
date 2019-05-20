import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DefaultLayout from '../../layuot/default'
// 引入该模块下的子页面
const Analyse = lazy(() => import('../../views/analyse'))
const Workplace = lazy(() => import('../../views/workplace'))
const Monitor = lazy(() => import('../../views/monitor'))
class Form extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route
            exact
            path="/form"
            render={() => {
              return <Redirect to="/form/basic-form" />
            }}
          />
          <Route path="/form/basic-form" component={Analyse} />
          <Route path="/form/step-form" component={Workplace} />
          <Route path="/form/advanced" component={Monitor} />
        </Switch>
      </Suspense>
    )
  }
}
export default withRouter(connect()(DefaultLayout(Form)))
