import { observer } from "mobx-react-lite"
import { useStore } from "../../mobxStore"
import { Button } from 'antd-mobile'
import { useState } from "react"

function Task() {

  const [keyword, setKeyword] = useState('')
  const keywordChange = (e) => {
    setKeyword(e.target.value)
  }
  const onKeyUp = (e) => {
    console.log(e)
    if (e.keyCode === 13) {
      taskStore.addItem({
        id: e.timeStamp,
        name: keyword,
        isDone: false
      })
      setKeyword('')
    }
  }

  const { taskStore } = useStore()
  const onChange = (id) => taskStore.checkItem(id) // 修改
  const onDel = (id) => taskStore.delItem(id) // 删除
  // 全选操作回调，通过事件对象e拿到当前是否选中的状态
  const allChange = (e) => {
    taskStore.allCheckItem(e.target.checked)
  }
  // 已勾选数量
  const checkedNum = () => {
    const num = taskStore.list.filter(item => item.isDone)
    return num && num.length
  }
  return (
    <section className="todoapp">
      <section className="main">
        <ul className="todo-list">
          {taskStore.list && taskStore.list.map(item => (
            <li className="to" key={item.id}>
              <div className="view">
                <input type="checkbox" className="toggle" checked={item.isDone} onChange={() => onChange(item.id)} />
                <label>{item.name}</label>
                <Button color="primary" size="mini" className="destory" onClick={() => onDel(item.id)}>删除</Button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <input type="checkbox" checked={taskStore.isAll} onChange={allChange} />
          <label>全选</label>
        </div>

        <div>
          <input autoFocus autoComplete="off" placeholder="请输入" value={keyword} onChange={keywordChange} onKeyUp={onKeyUp} />
          <label>新增</label>
        </div>

      </section>
      <footer className="footer">
        <span className="todo-count">任务总数{taskStore.list.length}，已完成{checkedNum()}</span>
      </footer>
    </section>
  )
}
export default observer(Task)