import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Icon } from 'antd'
import Nprogress from 'nprogress'

class Workplace extends React.Component {
  componentWillMount() {
    Nprogress.start()
  }
  componentDidMount() {
    Nprogress.done()
  }
  render() {
    return (
      <div>
        <Button type="primary">workplace</Button>
        <Link to="/home/analyse">
          <Icon type="upload" />
          <span>工作台</span>
        </Link>
      </div>
    )
  }
}

export default withRouter(connect()(Workplace))
