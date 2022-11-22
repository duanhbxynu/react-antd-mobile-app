import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Product() {
  // 获取路由中的参数
  const location = useLocation()
  useEffect(() => {
    console.log(location.state)  // {user: '二狗子', mobile: '17899990987'}
  }, [])
  return (
    <div>Product</div>
  )
}
