'use client'
import Footer from '../components/Footer'
import AddNewTodo from './components/AddNewTodo'
import TodoList from './components/TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, createContext } from 'react'

export const TodosContext = createContext(null)

const TodoPage = () => {
  const [todos, settodos] = useState([])
  
  const addNewTodo = (e) =>{
    setisOpen(!isOpen)
  }
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <main className="flex h-screen min-h-screen flex-col items-center justify-between bg-amber-100 overflow-hidden">
        <div className="flex w-full h-1/4 items-center justify-center font-bold">
          <div className='title uppercase'>
            <div className="text-lg  text-purple-800">Nothing</div>
            <div className="text-5xl text-zinc-950">To Do <span className="text-[#123456]">App</span></div>
          </div>
        </div> 
        <div className="relative h-1/2 flex flex-col w-full items-center justify-between p-4">
          <TodosContext.Provider value={[todos, settodos]}>
            <TodoList/>
            
            {isOpen && <AddNewTodo handleClose={addNewTodo}/>}  
          </TodosContext.Provider>
          <button onClick={addNewTodo} className='fixed bottom-[80px] bg-[#123456] p-2 px-4 text-amber-100 rounded-full z-10'>
            {isOpen ? <FontAwesomeIcon icon={faXmark}/> : 'Add New Todo'} 
          </button>
        </div>
        <div className="flex h-1/4 w-full justify-center">
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default TodoPage