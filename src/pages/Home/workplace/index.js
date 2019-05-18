import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'antd'
class Workplace extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Button type="primary">workplace</Button>
      </div>
    )
  }
}

export default withRouter(connect()(Workplace))
