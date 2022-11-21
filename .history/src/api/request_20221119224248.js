// 该文件是对axios的二次封装，目的是：同意处理错误的请求，返回服务器的纯数据
import axios from 'axios'
import { Toast } from 'antd-mobile'
import NProgress from 'nprogress'
import 'n'

// 请求拦截器
axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// 响应拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  },
  error => {
    NProgress.done()
    Toast.show({ icon: 'fail', content: error.message })
    return new Promise(() => { })
  }
)

export default axios