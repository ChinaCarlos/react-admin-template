import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import './default.less'
import { menuList } from '../../constants/menu'
import { Layout, Menu, Breadcrumb, Icon, Avatar, Badge, Dropdown } from 'antd'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu
let MENU_LIST = {}
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1306275_77rjwjz5z1k.js'
})

class DefaultLayout extends Component {
  static propTypes = {
    menuList: PropTypes.array
  }
  state = {
    collapsed: false,
    openKeys: [menuList[0].key],
    selectedKeys: [menuList[0].children[0].key]
  }
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    const rootSubmenuKeys = menuList.map(item => item.key)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  onCollapse = collapsed => {
    this.setState({ collapsed })
  }
  changeSelectKeys = keys => {
    this.setState({
      selectedKeys: [keys]
    })
  }
  renderMenu(menuTreeData) {
    return menuTreeData.map(item => {
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <IconFont type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item
          key={item.key}
          onClick={this.changeSelectKeys.bind(this, item.key)}
        >
          <Link to={item.path}>
            <span>
              <IconFont type={item.icon} />
              <span>{item.title}</span>
            </span>
          </Link>
        </Menu.Item>
      )
    })
  }
  appBreadcrumb(menuList) {
    for (let i = 0; i < menuList.length; i++) {
      let item = menuList[i]
      MENU_LIST = Object.assign({}, MENU_LIST, {
        [item.path]: { title: item.title }
      })
      if (item.children && item.children.length > 0) {
        for (let k = 0; k < item.children.length; k++) {
          let child = item.children[k]
          MENU_LIST = Object.assign({}, MENU_LIST, {
            [child.path]: { title: child.title }
          })
        }
      }
    }
    const { location } = this.props
    const pathSnippets = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      return <Breadcrumb.Item key={url}>{MENU_LIST[url].title}</Breadcrumb.Item>
    })
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">{'首页'}</Breadcrumb.Item>
    ].concat(extraBreadcrumbItems)
    return breadcrumbItems
  }
  changeMenu() {
    const { location } = this.props
    let pathname = location.pathname
    let tempArr = pathname.split('/')
    let openKeys = tempArr[1]
    tempArr.splice(0, 1)
    let keys = tempArr.join('-')
    this.setState({
      openKeys: [openKeys],
      selectedKeys: [keys]
    })
  }
  componentDidMount() {
    this.changeMenu()
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
          theme="dark"
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
          <Menu
            theme="dark"
            openKeys={this.state.openKeys}
            selectedKeys={this.state.selectedKeys}
            onOpenChange={this.onOpenChange.bind(this)}
            mode="inline"
          >
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
              {this.appBreadcrumb(menuList)}
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
