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
    const NavigationView = lazy(() => import('../views/common/button'))
    return (
      <DefaultLayout>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route
              exact
              path="/navigation"
              render={() => {
                return <Redirect to="/navigation/affix" />
              }}
            />
            <Route path="/navigation/affix" component={NavigationView} />
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
