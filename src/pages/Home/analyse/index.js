import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class Analyse extends React.Component {
  render() {
    return <div>Analyse</div>
  }
}

export default connect()(withRouter(Analyse))
