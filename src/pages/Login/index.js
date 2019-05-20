import React from 'react'
import { Link } from 'react-router-dom'
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Link to="/home/analyse">分析页</Link>
        <Link to="/home/workplace">工作台</Link>
      </div>
    )
  }
}
