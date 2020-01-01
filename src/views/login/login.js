import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
class Login extends Component {
  static propTypes = {
    userEmail: PropTypes.string,
    userPassword: PropTypes.string
  }
  render() {
    return <div>login</div>
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    userEmail: '',
    userPassword: ''
  }
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({}, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
