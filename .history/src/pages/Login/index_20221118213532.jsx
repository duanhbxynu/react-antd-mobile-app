import React, { Component, useState } from 'react'
import { NavBar, Input } from 'antd-mobile'

export default class Login extends Component {
  render() {
    const [value, setValue] = useState('')
    return (
      <div>
        <NavBar mode='light'>手机验证码登录</NavBar>
        <Input placeholder='请输入手机号' value='{value}' onChange={val}/>
      </div>
    )
  }
}
