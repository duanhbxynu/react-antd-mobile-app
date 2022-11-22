import { useEffect } from 'react'
import { getCookie, removeCookie } from '../../utils/cookie'
import { reqVerifyToken, reqLogout } from '../../api'
import { useNavigate } from 'react-router-dom'
import { NavBar, Avatar, Button, Toast } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons'
import './userCenter.less'

export default function UserCenter() {
  const navigate = useNavigate()
  const userInfo = getCookie('userInfo') ? JSON.parse(getCookie('userInfo')) : ''
  useEffect(async () => {
    console.log('此处是componentDidMount钩子函数')
    const result = await reqVerifyToken() // 校验token的接口
    console.log(result)
    const token = userInfo.token
    if (token) {
      // token有值且校验通过
    } else {
      // 校验失败跳转登录页
      Toast.show({ icon: 'fail', content: '登录信息失效，请重新登录' })
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    }

    return () => {
      console.log('此处是componentWillUnmount钩子函数')
    }
  }, [])

  const logout = async () => {
    navigate('/login')
    removeCookie('userInfo')
    await reqLogout(userInfo.token)
  }
  const toProductCenter = () => {
    // 路由传值
    navigate('/productCenter', { state: { 'user': userInfo.nickName, 'mobile': userInfo.mobile } })
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
        {
          userInfo ? (
            <div className='info' onClick={toProductCenter}>
              <span>产品中心</span><span><RightOutline /></span>
            </div>
          ) : null
        }
        <Button color='primary' block size='middle' onClick={logout}>退出登录</Button>
      </div>
    </div>
  )
}
