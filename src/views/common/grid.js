import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './common.less'

export default class extends Component {
  render() {
    return (
      <Row className="page-views">
        <Col span={24} className="info-item-container">
          <div className="gutter-example">
            <Row className="margin-item" gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
            </Row>
            <Row className="margin-item">
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">col-8</div>
              </Col>
              <Col className="gutter-row" span={8} offset={8}>
                <div className="gutter-box">col-8</div>
              </Col>
            </Row>
            <Row className="margin-item">
              <Col className="gutter-row" span={6} offset={6}>
                <div className="gutter-box"> col-6 col-offset-6</div>
              </Col>
              <Col className="gutter-row" span={6} offset={6}>
                <div className="gutter-box"> col-6 col-offset-6</div>
              </Col>
            </Row>
            <Row className="margin-item">
              <Col className="gutter-row" span={12} offset={6}>
                <div className="gutter-box"> col-12 col-offset-6</div>
              </Col>
            </Row>
            <Row className="margin-item">
              <Col className="gutter-row" span={18} push={6}>
                <div className="gutter-box"> col-18 col-push-6</div>
              </Col>
              <Col className="gutter-row" span={6} pull={18}>
                <div className="gutter-box"> col-6 col-pull-18</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }
}
