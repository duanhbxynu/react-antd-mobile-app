import React, { Component } from 'react'
import { NavBar, Input, Button } from 'antd-mobile'
import './login.less'
import github from '../../assets/github.png'
import weixin from '../../assets/weixin.png'
import qq from '../../assets/qq.png'

export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar mode='light'>手机验证码登录</NavBar>
        <Input placeholder='请输入手机号' clearable />
        <div className='verify-input'>
          <Input placeholder='请输入验证码' clearable />
          <button className='verify-btn'>获取验证码</button>
        </div>
        <Button color='primary' block size='middle'>登录</Button>
        <footer>
          <fieldset className='other' align="center">
            <legend className='legend'>其他登录方式</legend>
          </fieldset>
          <div>
            <img src="{github}" alt="" />
            <img src="{weixin}" alt="" />
            <img src="{qq}" alt="" />
          </div>
        </footer>
      </div>
    )
  }
}
