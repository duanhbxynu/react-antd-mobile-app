import React, { Component } from 'react'
import { NavBar, Input } from 'antd-mobile'

export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar mode='light'>手机验证码登录</NavBar>
        <Input placeholder='请输入手机号' clearable />
        
        <Input placeholder='请输入验证码' clearable />
      </div>
    )
  }
}
