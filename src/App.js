import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'
import CommonPage from './pages/common'
import NavigationPage from './pages/navigation'
import Login from './views/login/login'
import NoFound from './views/no-found/index'
import { getUserName, setUserName } from './store/user/action'

class App extends React.Component {
  static propTypes = {
    userName: PropTypes.string
  }
  componentDidMount() {}

  render() {
    const isLogin = true
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return isLogin ? (
                <Redirect to="/common" />
              ) : (
                <Redirect to="/login" />
              )
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/common" component={CommonPage} />
          <Route path="/navigation" component={NavigationPage} />
          <Route component={NoFound} />
        </Switch>
      </Router>
    )
  }
}
function mapStateToProps(state) {
  return {
    userName: state.userReducer.userName
  }
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ setUserName, getUserName }, dispatch)
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
