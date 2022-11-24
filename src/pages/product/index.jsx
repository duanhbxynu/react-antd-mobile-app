import { useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Button, Input } from "antd-mobile"
import NameList from './list'
import './product.less'

export default function Product() {
  const [state, setState] = useState({
    author: '',
    message: {
      id: 1,
      text: '123,木头人'
    }
  })

  // 获取路由中的参数
  const location = useLocation()
  console.log(location.state)  // {user: '二狗子', mobile: '17899990987'}

  const addText = () => {
    setState(prevState => (
      {
        ...prevState,
        message: {
          ...prevState.message,
          text: location.state.user
        }
      }
    ))
  }

  const inputRef = useRef()
  const [val, setValue] = useState([])
  const addName = () => {
    // 获取input的值
    const inputValue = inputRef.current.nativeElement.value
    console.log(inputRef.current.nativeElement.value, 'inputValue')
    // 传值给子组件
    inputValue && setValue(() => ([...val, inputValue]))
  }
  return (
    <div>
      <Button color="primary" block onClick={addText}>按钮</Button>{state.message.text}
      <div className="addName">
        <Input placeholder='请输入' ref={inputRef} clearable />
        <Button color="default" size="middle" onClick={addName}>添加</Button>
      </div>
      <NameList nameList={val} />
    </div>
  )
}
