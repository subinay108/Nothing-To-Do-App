'use client'
import { useState } from 'react'
import Description from './Description'
import { useContext } from 'react'
import { TodosContext } from '../page'
import { mutate } from 'swr'

const TodoItem = ({todo}) => {
  const [todos, settodos] = useContext(TodosContext)
  const [isDescriptionOpen, setisDescriptionOpen] = useState(false)
  const [checked, setchecked] = useState(todo.completed)
  function openDescription(e){setisDescriptionOpen(true)}
  function closeDescription(e){setisDescriptionOpen(false)}
  function handleChange(e){
    updateTodo(!checked)
    setchecked(!checked)
  }

  const updateTodo = async (isCompleted) => {
    const updatedTodoData = {"completed": isCompleted, "last_modified": Math.floor(Date.now()/1000).toString()}

    try {
      const response = await fetch(`https://todo-api-v41j.onrender.com/todo/v1/todos/${todo.id}/`, {
        method: 'PATCH', // or 'PATCH' depending on your API's requirements
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodoData), // Send updated data in the request body
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      // If successful, update the todo in the UI and mutate the SWR cache
      mutate('https://todo-api-v41j.onrender.com/todo/v1/todos/', (existingTodos = []) => {
        return existingTodos.map(item => (item.id === todo.id ? Object.assign(item, updatedTodoData) : item));
      }, false);
  
      settodos(todos.map(item => (item.id === todo.id ? Object.assign(item, updatedTodoData) : item)));
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  return (
      <li className="flex items-center">
            <input className="h-[18px] w-[18px] mr-4 ml-1 appearance-none checked:bg-[#123456] p-[2px] bg-clip-content hover:ring-2 border border-black" 
            type="checkbox" 
            id={'todo'+ todo.id} 
            name={'todo'+ todo.id} 
            checked={checked}
            onChange={handleChange}/>
            <label onClick={openDescription} className={"w-[85%] text-purple-900 font-semibold cursor-pointer text-ellipsis truncate decoration-2 " + (checked ? "line-through": "hover:underline")} >
              {todo.title}
            </label>
            {isDescriptionOpen && <Description todo={todo} handleClose={closeDescription} checked={checked} handleChange={handleChange}/>}
      </li>
  )
}

export default TodoItem