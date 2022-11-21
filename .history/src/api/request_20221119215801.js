// 该文件是对axios的二次封装，目的是：同意处理错误的请求，返回服务器的纯数据
import axios from 'axios'
import {Toast} from 'antd-mobile'

// 请求拦截器
axios.interceptors.request.use(config => {
  return config
})

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    Toast.show({ icon: 'fail', content: '手机号格式不合法！' })
    alert(error.message)
    return new Promise(() => { })
  }
)

export default axios