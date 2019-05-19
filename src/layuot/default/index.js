import React from 'react'
import { Layout, Icon, BackTop } from 'antd'
import SiderMenu from '../../components/Sider/index'
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
