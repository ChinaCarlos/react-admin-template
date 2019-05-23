import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class AdvancedForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {}
  render() {
    return <div>advanced Form</div>
  }
}

export default withRouter(connect()(AdvancedForm))
