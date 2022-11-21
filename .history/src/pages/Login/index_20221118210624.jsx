import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar onBack={back}>标题</NavBar>
      </div>
    )
  }
}
