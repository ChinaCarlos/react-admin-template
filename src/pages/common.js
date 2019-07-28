import React, { Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import DefaultLayout from '../layuot/default/default'
class HomePage extends Component {
  static propTypes = {
    authList: PropTypes.array
  }
  render() {
    const CommonViewButton = lazy(() => import('../views/common/button'))
    const CommonViewIcon = lazy(() => import('../views/common/icon'))
    const CommonViewTypography = lazy(() =>
      import('../views/common/typography')
    )
    const CommonViewGrid = lazy(() => import('../views/common/grid'))
    const CommonViewLayout = lazy(() => import('../views/common/layout'))
    return (
      <DefaultLayout>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route
              exact
              path="/common"
              render={() => {
                return <Redirect to="/common/button" />
              }}
            />
            <Route path="/common/button" component={CommonViewButton} />
            <Route path="/common/icon" component={CommonViewIcon} />
            <Route path="/common/typography" component={CommonViewTypography} />
            <Route path="/common/grid" component={CommonViewGrid} />
            <Route path="/common/layout" component={CommonViewLayout} />
          </Switch>
        </Suspense>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    authList: state.userReducer.authList || []
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({}, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
)
