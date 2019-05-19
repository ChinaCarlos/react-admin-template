import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Icon } from 'antd'
class Workplace extends React.Component {
  componentDidMount() {
    console.log(this.props)
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
