import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import DefaultLayout from '../../layuot/default'
// 引入该模块下的子页面
const BaseForm = lazy(() => import('../../views/baseForm'))
const StepForm = lazy(() => import('../../views/stepForm'))
const advancedForm = lazy(() => import('../../views/advancedForm'))
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
          <Route path="/form/basic-form" component={BaseForm} />
          <Route path="/form/step-form" component={StepForm} />
          <Route path="/form/advanced-form" component={advancedForm} />
        </Switch>
      </Suspense>
    )
  }
}
export default withRouter(connect()(DefaultLayout(Form)))
