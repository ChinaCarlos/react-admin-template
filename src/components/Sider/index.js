import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
const { Sider } = Layout
const SubMenu = Menu.SubMenu
class SiderComponent extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { location } = this.props
    return (
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="logo" style={{ height: '64px', zIndex: 1 }}>
          LOGO
        </div>
        <Menu
          theme="light"
          mode="inline"
          // openKeys={['/home']}
          defaultSelectedKeys={['/home/analyse']}
          selectedKeys={[location.pathname]}
        >
          <SubMenu
            key="/home"
            title={
              <span>
                <Icon type="mail" />
                <span>首页</span>
              </span>
            }
          >
            <Menu.Item key="/home/analyse">
              <Link to="/home/analyse">
                <Icon type="upload" />
                <span>数据分析</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/home/workplace">
              <Link to="/home/workplace">
                <Icon type="upload" />
                <span>工作台</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(connect()(SiderComponent))
