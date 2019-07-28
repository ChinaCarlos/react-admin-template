import React, { Component } from 'react'
import { Button, Row, Col, Icon } from 'antd'
import './common.less'

const ButtonGroup = Button.Group
class ButtonPage extends Component {
  state = {
    loading: false,
    iconLoading: false
  }
  enterLoading = () => {
    this.setState({ loading: true })
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true })
  }

  render() {
    return (
      <Row className="page-views">
        <Col span={24} className="info-item-container">
          <Button className="margin-item" type="primary">
            Primary
          </Button>
          <Button className="margin-item">Default</Button>
          <Button className="margin-item" type="dashed">
            Dashed
          </Button>
          <Button className="margin-item" type="danger">
            Danger
          </Button>
          <Button className="margin-item" type="link">
            Link
          </Button>
          <Button
            className="margin-item"
            type="primary"
            shape="circle"
            icon="search"
          />
          <Button className="margin-item" type="primary" icon="search">
            Search
          </Button>
          <Button className="margin-item" shape="circle" icon="search" />
          <Button className="margin-item" icon="search">
            Search
          </Button>
          <br />
          <Button className="margin-item" shape="circle" icon="search" />
          <Button className="margin-item" icon="search">
            Search
          </Button>
          <Button
            className="margin-item"
            type="dashed"
            shape="circle"
            icon="search"
          />
          <Button className="margin-item" type="dashed" icon="search">
            Search
          </Button>
          <Button className="margin-item" type="primary">
            Primary
          </Button>
          <Button className="margin-item" type="primary" disabled>
            Primary(disabled)
          </Button>
          <br />
          <Button className="margin-item">Default</Button>
          <Button className="margin-item" disabled>
            Default(disabled)
          </Button>
          <br />
          <Button className="margin-item" type="dashed">
            Dashed
          </Button>
          <Button className="margin-item" type="dashed" disabled>
            Dashed(disabled)
          </Button>
          <br />
          <Button className="margin-item" type="link">
            Link
          </Button>
          <Button className="margin-item" type="link" disabled>
            Link(disabled)
          </Button>
          <div
            style={{
              padding: '8px 8px 0 8px',
              background: 'rgb(190, 200, 200)'
            }}
          >
            <Button className="margin-item" ghost>
              Ghost
            </Button>
            <Button className="margin-item" ghost disabled>
              Ghost(disabled)
            </Button>
          </div>
          <br />
          <br />
          <Button className="margin-item" type="primary" loading>
            Loading
          </Button>
          <Button className="margin-item" type="primary" size="small" loading>
            Loading
          </Button>
          <br />
          <Button
            className="margin-item"
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
          >
            Click me!
          </Button>
          <Button
            className="margin-item"
            type="primary"
            icon="poweroff"
            loading={this.state.iconLoading}
            onClick={this.enterIconLoading}
          >
            Click me!
          </Button>
          <br />
          <Button className="margin-item" shape="circle" loading />
          <Button
            className="margin-item"
            type="primary"
            shape="circle"
            loading
          />
          <ButtonGroup className="margin-item">
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup className="margin-item">
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup className="margin-item">
            <Button type="primary">
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
          <ButtonGroup className="margin-item">
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </Col>
      </Row>
    )
  }
}

export default ButtonPage
