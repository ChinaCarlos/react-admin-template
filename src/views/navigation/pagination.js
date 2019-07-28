import React, { Component } from 'react'
import { Row, Col, Pagination } from 'antd'
import './navigation.less'
function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize)
}
function onChange(pageNumber) {
  console.log('Page: ', pageNumber)
}
function showTotal(total) {
  return `Total ${total} items`
}
function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <span>Previous</span>
  }
  if (type === 'next') {
    return <span>Next</span>
  }
  return originalElement
}
export default class extends Component {
  state = {
    current: 3
  }

  onChange = page => {
    console.log(page)
    this.setState({
      current: page
    })
  }
  render() {
    return (
      <Row className="page-views">
        <Col span={24} className="info-item-container">
          <Pagination className={'margin-item'} defaultCurrent={1} total={50} />
          <Pagination
            className={'margin-item'}
            defaultCurrent={6}
            total={500}
          />
          <br />
          <div>
            <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              defaultCurrent={3}
              total={500}
            />
            <br />
          </div>
          <div>
            <Pagination
              showQuickJumper
              defaultCurrent={2}
              total={500}
              onChange={onChange}
            />
            <br />
            <Pagination
              showQuickJumper
              defaultCurrent={2}
              total={500}
              onChange={onChange}
              disabled
            />
          </div>
          <br />
          <div>
            <Pagination size="small" total={50} />
            <Pagination
              size="small"
              total={50}
              showSizeChanger
              showQuickJumper
              className={'margin-item'}
            />
            <Pagination
              className={'margin-item'}
              size="small"
              total={50}
              showTotal={showTotal}
            />
          </div>
          <br />
          <Pagination simple defaultCurrent={2} total={50} />
          <br />
          <Pagination
            className={'margin-item'}
            current={this.state.current}
            onChange={this.onChange}
            total={50}
          />
          <br />
          <div>
            <Pagination
              total={85}
              showTotal={total => `Total ${total} items`}
              pageSize={20}
              defaultCurrent={1}
            />
            <br />
            <Pagination
              total={85}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              pageSize={20}
              defaultCurrent={1}
            />
          </div>
          <br />
          <Pagination total={500} itemRender={itemRender} />
        </Col>
      </Row>
    )
  }
}
