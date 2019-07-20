import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import './default.less'
import { menuList } from '../../constants/menu'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Badge, Dropdown } from 'antd'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu
// const IconFont = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_1306275_mur78vncge.js'
// })

class DefaultLayout extends Component {
  static propTypes = {
    menuList: PropTypes.array
  }
  state = {
    collapsed: false
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }
  renderMenu(menuTreeData) {
    return menuTreeData.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <span>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </span>
        </Menu.Item>
      )
    })
  }
  render() {
    const userMenu = (
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
          width={180}
          collapsible
          theme="light"
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse.bind(this)}
        >
          <div className="logo">
            <div className="logo-image">
              {/*<IconFont type="icon-yunjiankongCMS" />*/}
              React
            </div>
            <div
              className={
                this.state.collapsed ? 'logo-title none' : 'logo-title'
              }
            >
              后台管理系统
            </div>
          </div>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            {this.renderMenu(menuList)}
          </Menu>
        </Sider>
        <Layout className="content-container">
          <Header className="app-header">
            <div className="user-name">欢迎您，Carlos</div>
            <Dropdown overlay={userMenu}>
              <Badge count={99}>
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
