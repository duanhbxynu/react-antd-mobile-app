import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default class Login extends Component {
  render() {
    const [value, setValue] = useState('')
    return (
      <div>
        <NavBar mode='light'>手机验证码登录</NavBar>

      </div>
    )
  }
}
