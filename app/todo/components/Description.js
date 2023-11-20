'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { TodosContext } from '../page'
import { mutate } from 'swr'
import moment from 'moment'

const Description = ({todo, handleClose, checked, handleChange}) => {
  const [todos, settodos] = useContext(TodosContext)

  const deleteTodo = async ()=>{
    try {
      const response = await fetch(`http://localhost:8000/todo/v1/todos/${todo.id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      // If successful, remove the todo from the UI and mutate the SWR cache
      mutate('http://localhost:8000/todo/v1/todos/', (existingTodos = []) => {
        return existingTodos.filter(item => item.id !== todo.id);
      }, false);
      
      // update the ui
      settodos(todos.filter(item => item.id !== todo.id))

      // close the model
      handleClose()

    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  return (
    <div className="fixed top-0 left-0 z-10 backdrop-blur-sm bg-[--background-modal] w-screen h-screen flex justify-center items-center">
      <div className="relative flex flex-col justify-around w-80 h-80 p-4 bg-amber-100 text-sm rounded-xl">
        <h1 className="text-xl font-bold mb-4 text-center">To Do Details</h1>
        <div className='italic text-xs'>Last modified {moment.duration(Math.floor(Date.now()/1000) - todo.last_modified, 'seconds').humanize()} ago</div>
        <div className='h-40 overflow-auto'>
          <p className='mb-2 text-ellipsis overflow-hidden'><span className="font-semibold">
            Title :</span> {todo.title}</p>
          <p className='text-ellipsis overflow-hidden'><span className="font-semibold">
            Description :</span> {todo.description}</p>
        </div>
        <div className='flex justify-around'>
          <button onClick={handleChange} className='bg-[#123456] p-2 px-4 text-amber-100 rounded-full'>{checked ? 'Pending' : 'Completed'}</button>
          <button onClick={deleteTodo} className='bg-purple-900 p-2 px-4 text-amber-100 rounded-full'>Delete</button>
        </div>
        <div onClick={handleClose} className='absolute top-4 right-6 text-xl cursor-pointer'><FontAwesomeIcon icon={faXmark}/></div>
        
      </div>
    </div>
    
  )
}

export default Description