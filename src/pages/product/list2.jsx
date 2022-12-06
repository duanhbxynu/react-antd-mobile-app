import { useEffect } from 'react'
import counterStore from '@/mobxStore/counterStore' // 导入counterStore
import channelStore from '@/mobxStore/channelStore'
import { observer } from 'mobx-react-lite' // 导入observer方法 // mobx和中间件工具 mobx-react-lite  只能函数组件中使用
import { Button } from 'antd-mobile'


function List2(props) {
  useEffect(() => {
    channelStore.setChannelList()  // 组件中通过 useEffect + 空依赖[]  触发action函数的执行
  }, [])
  return (
    <div>
      <div>{props?.sendData?.names}</div>
      <div>{props?.sendData?.address}</div>
      <div>{props?.sendData?.amount}</div>
      <div>{props?.sendData?.delivery ? '是' : '否'}</div>
      <div>{props?.sendData?.birthday}</div>
      <div>{props?.sendData?.favoriteFruits}</div>
      <div>{props?.sendData?.slider}</div>
      <hr />

      {/* 下面是react中使用mobx */}
      <div>mobx的简单使用：</div>
      <Button color='primary' onClick={() => counterStore.addCount()}>{counterStore.count}</Button>
      <br />
      {/* 原数组 */}
      {JSON.stringify(counterStore.list)}
      <br />
      {/* 计算属性 */}
      {JSON.stringify(counterStore.filterList)}
      <br />
      <Button color='primary' onClick={() => counterStore.changeList()}>change list</Button>

      {/* 异步获取mobx数据渲染到页面 */}
      <div>
        {
          channelStore.channelList.map(item => {
            return <span style={{ margin: '0 10px 0 0' }} key={item.id}>{item.id + 1}-{item.name}</span>
          })
        }
      </div>
    </div >
  )
}
// 包裹组件让视图响应数据变化  让组件可以响应数据的变化[也就是数据一变组件重新渲染]
export default observer(List2)