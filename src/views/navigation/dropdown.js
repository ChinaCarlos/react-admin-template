import React, { Component } from 'react'
import { Row, Col, Menu, Dropdown, Icon, Button, message } from 'antd'
import './navigation.less'
const { SubMenu } = Menu
function handleButtonClick(e) {
  message.info('Click on left button.')
  console.log('click left button', e)
}

function handleMenuClick(e) {
  message.info('Click on menu item.')
  console.log('click', e)
}
export default class extends Component {
  render() {
    const buttonMenu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="user" />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    )
    const subMenu = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
      </Menu>
    )
    const menu = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <Menu.Item>3rd menu item</Menu.Item>
      </Menu>
    )
    return (
      <Row className="page-views">
        <Col span={24} className="info-item-container">
          <Dropdown overlay={menu}>
            Hover me <Icon type="down" />
          </Dropdown>
          <br />
          <div>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button className={'margin-item'}>bottomLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button className={'margin-item'}>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button className={'margin-item'}>bottomRight</Button>
            </Dropdown>
            <br />
            <Dropdown overlay={menu} placement="topLeft">
              <Button className={'margin-item'}>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter">
              <Button className={'margin-item'}>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight">
              <Button className={'margin-item'}>topRight</Button>
            </Dropdown>
          </div>
          <br />
          <Dropdown overlay={subMenu}>
            Cascading menu <Icon type="down" />
          </Dropdown>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <span style={{ userSelect: 'none', marginLeft: '20px' }}>
              Right Click on Me
            </span>
          </Dropdown>
          <br />
          <div id="components-dropdown-demo-dropdown-button">
            <Dropdown.Button
              className={'margin-item'}
              onClick={handleButtonClick}
              overlay={buttonMenu}
            >
              Dropdown
            </Dropdown.Button>
            <Dropdown.Button
              className={'margin-item'}
              overlay={buttonMenu}
              icon={<Icon type="user" />}
            >
              Dropdown
            </Dropdown.Button>
            <Dropdown.Button
              onClick={handleButtonClick}
              overlay={buttonMenu}
              disabled
              className={'margin-item'}
            >
              Dropdown
            </Dropdown.Button>
            <Dropdown overlay={buttonMenu}>
              <Button className={'margin-item'}>
                Button <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
        </Col>
      </Row>
    )
  }
}
