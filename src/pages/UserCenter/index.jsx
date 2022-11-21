import React, { useEffect } from 'react'
import { getCookie, removeCookie } from '../../utils/cookie'
import { reqVerifyToken, reqLogout } from '../../api'
import { useNavigate } from 'react-router-dom'
import { NavBar, Avatar, Button } from 'antd-mobile'
import './userCenter.less'

export default function UserCenter() {
  const navigate = useNavigate()
  const userInfo = JSON.parse(getCookie('userInfo')) || ''
  useEffect(async () => {
    console.log('此处是componentDidMount钩子函数')
    const result = reqVerifyToken() // 校验token的接口
    const token = userInfo.token
    if (userInfo && token) {
      // token有值且校验通过
      console.log(result)
    } else {
      // 校验失败跳转登录页
      navigate('/login')
    }

    return () => {
      console.log('此处是componentWillUnmount钩子函数')
    }
  })

  const logout = async () => {
    navigate('/login')
    removeCookie('userInfo')
    await reqLogout(userInfo.token)
  }

  return (
    <div className='center'>
      <NavBar mode='light'>个人中心</NavBar>
      <div className='detail'>
        <Avatar src={userInfo.avatar} />
        <p>欢迎，{userInfo.name}</p>
        <p>个人信息</p>
        <div className='info'>
          <span>用户名</span><span>{userInfo.nickName}</span>
        </div>
        <div className='info'>
          <span>手机</span><span>{userInfo.mobile}</span>
        </div>
      </div>
      <Button color='primary' block size='middle' onClick={logout}>退出登录</Button>
    </div>
  )
}
