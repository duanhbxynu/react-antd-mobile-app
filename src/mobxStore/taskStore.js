import { makeAutoObservable } from "mobx"

class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: false
    }
  ]
  taskList = []
  constructor() {
    makeAutoObservable(this)
  }
  addTask() {
    this.taskList.push('vue', 'react')
  }
  // 进行单选修改数据的方法
  checkItem = (id) => {
    const item = this.list.find(item => item.id === id)
    item.isDone = !item.isDone
  }
  // 删除的方法
  delItem = (id) => {
    this.list = this.list.filter(item => item.id !== id)
  }
  // 是否全选的计算属性
  get isAll() {
    return this.list.every(item => item.isDone)
  }
  // 遍历修改所有item
  allCheckItem = (checked) => {
    this.list.forEach(item => {
      item.isDone = checked
    })
  }
  // 新增的方法
  addItem = (item) => {
    this.list.push(item)
  }
}

const task = new TaskStore()

export default task