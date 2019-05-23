import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class StepForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {}
  render() {
    return <div>step Form</div>
  }
}

export default withRouter(connect()(StepForm))
