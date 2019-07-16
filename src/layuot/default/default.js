import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
class DefaultLayout extends Component {
  static propTypes = {
    menuList: PropTypes.array
  }
  render() {
    return (
      <div>
        <h3>layout</h3>
        <div className="content">{this.props.children}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    menuList: []
  }
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({}, dispatch)
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DefaultLayout)
)
