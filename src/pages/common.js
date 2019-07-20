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
    const CommonView = lazy(() => import('../views/home/index'))
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
            <Route path="/common/button" component={CommonView} />
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
