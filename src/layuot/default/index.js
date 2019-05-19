import React from 'react'
import { Layout, Icon, BackTop, Breadcrumb } from 'antd'
import SiderMenu from '../../components/Sider/index'
import { Link } from 'react-router-dom'

const { Header, Content } = Layout
export default PageComponent => {
  return class extends React.Component {
    constructor(props) {
      super()
      this.props = props
    }
    state = {
      collapsed: false
    }

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }

    render() {
      const breadcrumbNameMap = {
        '/home': '数据概览',
        '/home/analyse': '数据分析',
        '/home/workplace': '我的工作台'
      }
      const { location } = this.props
      const pathSnippets = location.pathname.split('/').filter(i => i)
      const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{breadcrumbNameMap[url]}</Link>
          </Breadcrumb.Item>
        )
      })
      const breadcrumbItems = [
        <Breadcrumb.Item key="home">
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
      ].concat(extraBreadcrumbItems)
      return (
        <Layout className="app-container">
          <SiderMenu collapsed={this.state.collapsed} />
          <Layout>
            <Header
              style={{
                background: '#fff',
                zIndex: 1999,
                paddingLeft: '10px'
              }}
            >
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                paddingBottom: '10000px'
              }}
            >
              <Breadcrumb>{breadcrumbItems}</Breadcrumb>
              <PageComponent {...this.props} />
              <BackTop>
                <div className="ant-back-top-inner">UP</div>
              </BackTop>
            </Content>
          </Layout>
        </Layout>
      )
    }
  }
}
