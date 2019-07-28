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
    const NavigationViewBreadcrumb = lazy(() =>
      import('../views/navigation/breadcrumb')
    )
    const NavigationViewDropdown = lazy(() =>
      import('../views/navigation/dropdown')
    )
    const NavigationViewMenu = lazy(() => import('../views/navigation/menu'))
    return (
      <DefaultLayout>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route
              exact
              path="/navigation"
              render={() => {
                return <Redirect to="/navigation/breadcrumb" />
              }}
            />
            <Route
              path="/navigation/breadcrumb"
              component={NavigationViewBreadcrumb}
            />
            <Route
              path="/navigation/dropdown"
              component={NavigationViewDropdown}
            />{' '}
            <Route path="/navigation/menu" component={NavigationViewMenu} />
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
