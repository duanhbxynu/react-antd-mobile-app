import React, { Component } from 'react'
import { Navigate } from "react-router-dom"
import { NavBar, Input, Button, Toast } from 'antd-mobile'
import { reqVerifyCode, reqLogin } from '../../api'
import { phoneReg, verifyCodeReg } from '../../utils/reg'
import { setCookie } from '../../utils/cookie'
import github from '../../assets/github.png'
import weixin from '../../assets/weixin.png'
import qq from '../../assets/qq.png'

import './login.less'

export default class Login extends Component {
  state = {
    phone: '',
    verifyCode: '',
    time: 60,
    canClick: true,
    loginSuccess: false
  }
  // 保存数据
  saveData = (type) => {
    return (value) => {
      // 如果用户输入的数据符合要求，那么维护进state
      if (type === 'phone' && phoneReg.test(value)) return this.setState({ [type]: value })
      if (type === 'verifyCode' && verifyCodeReg.test(value)) return this.setState({ [type]: value })
      this.setState({ [type]: '' })
    }
  }
  // 获取验证码的回调
  getVerifyCode = async () => {
    const { phone, canClick } = this.state
    if (!canClick) return
    if (!phone) return Toast.show({ icon: 'fail', content: '手机号格式不合法！' })
    // 更新状态，让获取验证码按钮不可点击
    this.setState({ canClick: false })
    // 开启定时器更新倒计时
    this.timer = setInterval(() => {
      let { time } = this.state
      time--
      // 若倒计时结束
      if (time <= 0) {
        clearInterval(this.timer)
        this.setState({ canClick: true, time: 60 })
        return
      }
      this.setState({ time })
    }, 1000)
    // 发送请求获取验证码
    const result = await reqVerifyCode(phone)
    console.log(result)
    Toast.show({ icon: 'success', content: '验证码下发成功' })
  }
  // 登录的回调
  login = async () => {
    // 获取手机号，验证码
    const { phone, verifyCode } = this.state
    if (!(phone && verifyCode)) {
      return Toast.show({ icon: 'fail', content: '请检查手机号和验证码格式' })
    }


    this.setState({ loginSuccess: true }) // 模拟跳转，提前跳
    let userInfoObj = {
      token: 'tokenValue.xxxxxxxxxxx',
      avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: 'Novalee Spicer',
      nickName: '二狗子',
      mobile: phone
    }
    setCookie('userInfo', JSON.stringify(userInfoObj))


    const result = await reqLogin(phone, verifyCode)
    const { code, message } = result
    if (code === 20000) {
      Toast.show({ icon: 'success', content: '登录成功' })
      // 登录成功后跳转到个人中心页
      this.setState({ loginSuccess: true })
      // 设置当前用户token
      setCookie('userInfo', JSON.stringify(userInfoObj))
    } else {
      Toast.show({ icon: 'fail', content: message })
    }
  }
  loginGithub = () => {
    // 第三方登录授权
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=8e6d0c4d08619032deea'
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { time, canClick, phone, verifyCode, loginSuccess } = this.state
    return (
      <div>
        <NavBar mode='light'>手机验证码登录</NavBar>
        <Input placeholder='请输入手机号' clearable onChange={this.saveData('phone')} />
        <div className='verify-input'>
          <Input placeholder='请输入验证码' clearable onChange={this.saveData('verifyCode')} />
          <button className='verify-btn' style={{ 'color': canClick ? 'red' : 'grey' }} onTouchStart={this.getVerifyCode}>
            获取验证码
            {canClick ? '' : `(${time}s)`}
          </button>
        </div>
        <Button color='primary' block size='middle' onClick={this.login} disabled={(phone && verifyCode) ? false : true}>
          登录{loginSuccess && (<Navigate to="/usercenter" replace={true} />)}
        </Button>
        <footer className='footer'>
          <fieldset className='other' align="center">
            <legend className='legend'>其他登录方式</legend>
          </fieldset>
          <div className='img'>
            <img onClick={this.loginGithub} src={github} alt="" />
            <img src={weixin} alt="" />
            <img src={qq} alt="" />
          </div>
          <div className='tip'>未注册的手机号，验证后会自动创建硅谷账号，登录即代表您同意：<a href="http://atguigu.com">《硅谷隐私政策》</a></div>
        </footer>
      </div>
    )
  }
}