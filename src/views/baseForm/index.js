import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class BaseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {}
  render() {
    return <div>base Form</div>
  }
}

export default withRouter(connect()(BaseForm))
