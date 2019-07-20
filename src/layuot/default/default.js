import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import './default.less'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Badge, Dropdown } from 'antd'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1306275_mur78vncge.js'
})
class DefaultLayout extends Component {
  static propTypes = {
    menuList: PropTypes.array
  }
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }
  render() {
    const menu = (
      <Menu className="user-menu-info">
        <Menu.Item>
          <Link to={'/sign-out'}>
            <Icon type="message" className="icon" />
            <span className="title">我的消息</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/user'}>
            <Icon type="user" className="icon" />
            <span className="title">个人中心</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/modify-password'}>
            <Icon type="edit" className="icon" />
            <span className="title">修改密码</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/sign-out'}>
            <Icon type="logout" className="icon" />
            <span className="title">退出登录</span>
          </Link>
        </Menu.Item>
      </Menu>
    )
    return (
      <Layout className="layout-container">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <div className="logo-image">
              <IconFont type="icon-yunjiankongCMS" />
            </div>
            <div
              className={
                this.state.collapsed ? 'logo-title none' : 'logo-title'
              }
            >
              后台管理系统
            </div>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="content-container">
          <Header className="app-header">
            <div className="user-name">欢迎您，Carlos</div>
            <Dropdown overlay={menu}>
              <Badge count={1}>
                <Avatar
                  shape="circle"
                  icon="user"
                  src="http://img5.imgtn.bdimg.com/it/u=1600321308,1587951365&fm=26&gp=0.jpg"
                />
              </Badge>
            </Dropdown>
          </Header>
          <Content className="content-box">
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="page-view-container">{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
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
