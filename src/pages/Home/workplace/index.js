import React from 'react'
import { withRouter } from 'react-router'
class Workplace extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return <div>workplace</div>
  }
}

export default withRouter(Workplace)
