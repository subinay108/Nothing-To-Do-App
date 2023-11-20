'use client'
import TodoItem from "./TodoItem"
import useSWR from 'swr'
import { useEffect, useContext } from 'react'
import { TodosContext } from "../page"

const TodoList = () => {
  const [todos, settodos] = useContext(TodosContext)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('http://127.0.0.1:8000/todo/v1/todos/', fetcher)
  useEffect(()=>{
    if(data){settodos(data)}
  }, [settodos, data])

  if (error) return <div>Something Went Wrong</div>
  if (isLoading) return <div>Loading...</div>

  // const data = [
  //   {
  //     "id": 1,
  //     "title": "This is todo 1",
  //     "description": "This is description 1",
  //     "last_modified": "kjslf",
  //     "completed": false
  //   },
  //   {
  //     "id": 2,
  //     "title": "This is todo 2",
  //     "description": "This is description 2",
  //     "last_modified": "kjslf",
  //     "completed": true
  //   },
  //   {
  //     "id": 3,
  //     "title": "This is todo 3",
  //     "description": "This is description 3",
  //     "last_modified": "kjslf",
  //     "completed": false
  //   },
  // ]
  return (
    <div className="w-80 h-[280px] border border-black p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
      {(todos && todos.length) ? 
      <ul className="text-lg w-full h-48 overflow-auto">
        {todos.map(todo=> <TodoItem key={todo.id} todos={todos} settodos={settodos} todo={todo}/>)}
      </ul> :
      <div className="text-center">Empty List</div>}
      
    </div>
  )
}

export default TodoList