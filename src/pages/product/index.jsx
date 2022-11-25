import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Button, Input } from "antd-mobile"
import NameList from './list'
import List2 from "./list2"
import './product.less'
import dayjs from "dayjs"

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
  // console.log(location.state)  // {user: '二狗子', mobile: '17899990987'}

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
  const [valu, setValue] = useState({
    detail: {
      address: "我是地址",
      amount: 5,
      birthday: new Date('2022-11-30'),
      delivery: true,
      favoriteFruits: ['apple', 'banana'],
      names: "张三",
      slider: 70
    },
    val: []
  })
  const addName = () => {
    // 获取input的值
    const inputValue = inputRef.current.nativeElement.value
    console.log(inputRef.current.nativeElement.value, 'inputValue')

    // 传值给子组件
    inputValue && setValue((prevData) => (
      {
        detail: {
          ...prevData.detail,
          address: inputValue
        },
        val: [...prevData.val, inputValue]
      }
    ))
  }

  // 接收子组件传过来的值
  const [sendData, setSendData] = useState()
  const getSendData = (data) => {
    // 接收数据data后进行后续处理
    console.log(data, 'data')
    // 传值给兄弟组件List2
    setSendData(() => ({
      ...data,
      birthday: dayjs(data.birthday).format('YYYY-MM-DD')
    }))
  }

  useEffect(() => {
    // console.log(valu, 'valu')
  }, [valu])

  return (
    <div>
      <Button color="primary" block onClick={addText}>按钮 {state.message.text}</Button>
      <div className="addName">
        <Input placeholder='请输入' ref={inputRef} clearable />
        <Button color="default" size="middle" onClick={addName}>添加</Button>
      </div>
      {/* nameList，detail是向子组件传值，send是接收子组件传值的方法 */}
      <NameList nameList={valu.val} detail={valu.detail} send={getSendData} />
      {/* 兄弟组件NameList向List2传值，子-父-子 */}
      <List2 sendData={sendData} />
    </div>
  )
}