import React, { Component } from 'react'
import { Row, Col, Breadcrumb, Icon, Menu } from 'antd'
import './navigation.less'

export default class extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            General
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            Layout
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            Navigation
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <Row className="page-views">
        <Col span={24} className="info-item-container">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="http://www.tmall.com/">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="http://www.tmall.com/">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
          <br />
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="user" />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
          <br />
          <Breadcrumb>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="http://www.tmall.com/">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
              <a href="http://www.tmall.com/">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    )
  }
}
