import { Button } from "antd-mobile"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
// 导入方法
import { useStore } from "../../mobxStore"

function Mobx() {
  // 得到store
  const store = useStore()

  useEffect(() => {
    store.channelStore.setChannelList()
  }, [])

  return (
    <div>
      <Button block color="primary" onClick={() => store.counterStore.addCount()}>
        {store.counterStore.count}
      </Button>
      <div>
        {
          store.channelStore.channelList && store.channelStore.channelList.map(item => {
            return <span style={{ margin: '0 10px 0 0' }} key={item.id}>{item.name}</span>
          })
        }
      </div>
    </div>
  )
}
export default observer(Mobx)