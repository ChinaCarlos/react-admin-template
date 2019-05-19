import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import DefaultLayout from '../../layuot/default/'
// 引入该模块下的子页面
const Analyse = lazy(() => import('./analyse/'))
const Workplace = lazy(() => import('./workplace/'))
class Index extends Component {
  componentWillMount() {
    Nprogress.start()
  }
  componentDidMount() {
    Nprogress.done()
  }
  componentWillUpdate() {
    Nprogress.start()
  }
  componentDidUpdate() {
    Nprogress.done()
  }
  render() {
    return (
      <Suspense fallback={<div>loading</div>}>
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
      </Suspense>
    )
  }
}
export default withRouter(connect()(DefaultLayout(Index)))
