import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Button } from "antd-mobile"

export default function Product() {
  const [datas, setData] = useState({
    author: '',
    message: {
      id: 1,
      text: '123,木头人'
    }
  })
  // 获取路由中的参数
  const location = useLocation()
  useEffect(() => {
    console.log(location.state)  // {user: '二狗子', mobile: '17899990987'}
  }, [])
  const addText = () => {
    setData(prevState => (
      {
        ...prevState,
        message: {
          ...prevState.message,
          text: location.state.user
        }
      }
    ))
  }


  return (
    <div>
      <Button color="primary" block onClick={addText}>按钮</Button>
      {datas.message.text}
    </div>
  )
}
