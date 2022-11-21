// 统一管理项目中所有的ajax请求
import request from './request'

// 请求验证码
expo verifyCode(phone) {
  return request.post('http://localhost:3000/login/digits', { phone })
}