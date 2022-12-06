// mobx模块化，组合模块导出统一方法
// 拆分模块js文件，每个模块中定义自己独立的state/action，在store/index.js中导入拆分之后的模块，进行模块组合
// 利用react的context机制导出统一的useStore方法，给业务组件使用

import React from "react"
import counter from './counterStore'
import channel from './channelStore'
import task from './taskStore'

class RootStore {
  constructor() {
    this.counterStore = counter
    this.channelStore = channel
    this.taskStore = task
  }
}

const rootStore = new RootStore()

// context机制的数据查找链，Provider如果找不到，就招createContext方法执行时传入的参数
const context = React.createContext(rootStore)

// useStore() => rootStore  {counterStore, channelStore}
const useStore = () => React.useContext(context)

export { useStore }