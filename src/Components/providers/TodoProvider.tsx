import { createContext, FC, ReactNode, useContext, useState } from 'react'

interface TodoInterface {
  todoList: Task[]
  setTodoList: (todoList: Task[]) => void
  todo: string
  setTodo: (task: string) => void
}

type Task = {
  id: string
  task: string
  isDone: boolean
}

const TodoContext = createContext({} as TodoInterface)
export const useTodo = () => useContext(TodoContext)

export const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [todoList, setTodoList] = useState<Task[]>([])
  const [todo, setTodo] = useState('')
  return (
    <TodoContext.Provider value={{ todoList, setTodoList, todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
