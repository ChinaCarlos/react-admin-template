import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'
import Dashboard from './pages/Dashboard'
import Form from './pages/Form'
import NoFound from './pages/NoFound/'
import Login from './pages/Login/'
import Register from './pages/Register/'
import { getUserName, setUserName } from './store/user/action'

class App extends React.Component {
  static propTypes = {
    userName: PropTypes.string
  }
  async componentDidMount() {
    // console.log(this.props)
    // await this.props.setUserName('admin-template')
    // console.log(this.props)
  }

  render() {
    const isSignIn = true
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return isSignIn ? <Redirect to="/dashboard" /> : <Login />
            }}
          />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/form" component={Form} />
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
