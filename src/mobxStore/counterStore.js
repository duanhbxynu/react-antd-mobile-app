import { computed, makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0 // 定义数据
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    makeAutoObservable(this, {
      filterList: computed  //在 makeAutoObservable 方法中标记计算属性
    }) // 响应式处理
  }
  addCount = () => {
    this.count++
  }
  // 修改原数据
  changeList = () => {
    this.list.push(7, 8, 9)
  }
  // 通过get关键词 定义计算属性
  get filterList() {
    return this.list.filter(item => item > 4)
  }
}

const counter = new CounterStore()
export default counter