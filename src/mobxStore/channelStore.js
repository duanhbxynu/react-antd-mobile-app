import { runInAction, makeAutoObservable, observable, action } from 'mobx'
import { reqChannels } from '@/api'

class ChannelStore {
  channelList = []
  constructor() {
    makeAutoObservable(this, {
      channelList: observable,
      setChannelList: action
    })
  }
  // 只要调用这个方法，就可以从后端拿到数据并存到channelList中
  async setChannelList() {
    const res = await reqChannels()
    // 方法一
    runInAction(() => {
      this.channelList = res.data.channels || []
    })
    // 方法二
    // this.setChannelList2(res.data.channels)

    // console.log(this.channelList, 'channelList')
  }
  // setChannelList2 = (data) => {
  //   this.channelList = data
  // }
}

const channelStore = new ChannelStore()
export default channelStore