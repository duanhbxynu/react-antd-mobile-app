import React, { Component } from 'react'
import { NavBar, Input, Button } from 'antd-mobile'
import github from '../../assets/github.png'
import weixin from '../../assets/weixin.png'
import qq from '../../assets/qq.png'
import { phoneReg, verifyCodeReg } from '../../utils/reg'
import './login.less'

export default class Login extends Component {
  state = {
    phone: '',
    verifyCode: ''
  }
  saveData = (type) => {
    return (value) => {
      // 如果用户输入的数据复合要求，那么维护进state
      if (type === 'phone' && phoneReg.test(value)) this.setState({ [type]: value })
      if (type === 'phone' && phoneReg.test(value)) this.setState({ [type]: value })
      } else {
        if (verifyCodeReg.test(value)) this.setState({ [type]: value })
        else this.setState({ [type]: '' })
      }
    }
  }
  render() {
    return (
      <div>
        <NavBar mode='light'>手机验证码登录</NavBar>
        <Input placeholder='请输入手机号' clearable onChange={this.saveData('phone')} />
        <div className='verify-input'>
          <Input placeholder='请输入验证码' clearable onChange={this.saveData('verifyCode')} />
          <button className='verify-btn' >获取验证码</button>
        </div>
        <Button color='primary' block size='middle'>登录</Button>
        <footer className='footer'>
          <fieldset className='other' align="center">
            <legend className='legend'>其他登录方式</legend>
          </fieldset>
          <div className='img'>
            <img src={github} alt="" />
            <img src={weixin} alt="" />
            <img src={qq} alt="" />
          </div>
          <div className='tip'>未注册的手机号，验证后会自动创建硅谷账号，登录即代表您同意：<a href="http://atguigu.com">《硅谷隐私政策》</a></div>
        </footer>
      </div>
    )
  }
}
