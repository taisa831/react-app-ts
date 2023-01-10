import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type Task = {
  id: string
  task: string
  isDone: boolean
}

export const Todo: React.FC = () => {
  const [todoList, setTodoList] = useState<Task[]>([])
  const [todo, setTodo] = useState('')
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value)
  }
  const onCreate = () => {
    setTodoList([...todoList, { task: todo, isDone: false, id: uuidv4() }])
  }
  const onUpdate = (id: string) => {
    const newTodoList = todoList.filter((todo) => {
      if (todo.id === id) {
        todo.isDone = true
      }
      return todo
    })
    setTodoList(newTodoList)
  }
  const onRemove = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodoList)
  }
  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={onCreate}>Add</button>
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>
            {todo.task}, {todo.isDone ? 'Done' : 'InProgress'}{' '}
            <button onClick={() => onRemove(todo.id)}>削除</button>
            <button onClick={() => onUpdate(todo.id)}>完了</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
