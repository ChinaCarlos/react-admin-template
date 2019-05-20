import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Nprogress from 'nprogress'

class Monitor extends React.Component {
  componentWillMount() {
    Nprogress.start()
  }
  componentDidMount() {
    Nprogress.done()
  }
  render() {
    return <div>监控页</div>
  }
}

export default withRouter(connect()(Monitor))
