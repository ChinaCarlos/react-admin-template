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
                <span>DashBoard</span>
              </span>
            }
          >
            <Menu.Item key="/dashboard/analyse">
              <Link to="/dashboard/analyse">
                <Icon type="upload" />
                <span>分析页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/workplace">
              <Link to="/dashboard/workplace">
                <Icon type="upload" />
                <span>工作台</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/monitor">
              <Link to="/dashboard/monitor">
                <Icon type="upload" />
                <span>监察页</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="/form"
            title={
              <span>
                <Icon type="mail" />
                <span>表单页</span>
              </span>
            }
          >
            <Menu.Item key="/form/basic-form">
              <Link to="/form/basic-form">
                <Icon type="upload" />
                <span>基础表单</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/form/step-form">
              <Link to="/form/step-form">
                <Icon type="upload" />
                <span>分步表单</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/form/advanced-form">
              <Link to="/form/advanced-form">
                <Icon type="upload" />
                <span>高级表单</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(connect()(SiderComponent))
