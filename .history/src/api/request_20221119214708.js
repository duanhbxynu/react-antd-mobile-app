// 该文件是对axios的二次封装，目的是：同意处理错误的请求，返回服务器的纯数据
import axios from 'axios'

// 
axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return new Promise(() => {

    })
  }

)

export default axios