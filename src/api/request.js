// 该文件是对axios的二次封装，目的是：同意处理错误的请求，返回服务器的纯数据
import axios from 'axios'
import { Toast } from 'antd-mobile'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 800000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // 添加header参数，如token等参数到请求头
  NProgress.start()
  return config
}, error => {
  if ((error + '').startsWith('Error: timeout of')) {
    // 失败后可以跳转回登录页
  }
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 根据返回参数状态，进行拦截或返回结果
    NProgress.done()
    return response.data
  },
  error => { // 如果状态码不是2开头 就会进入该回调
    NProgress.done()
    Toast.show({ icon: 'fail', content: error.message })
    return new Promise(() => { })
  }
)

export default service