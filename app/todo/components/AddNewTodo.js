'use client'
import { mutate } from 'swr'
import { TodosContext } from '../page';
import { useContext } from 'react';

const AddNewTodo = ({ handleClose}) => {
  const [todos, settodos] = useContext(TodosContext)
  const addTodo = async (title, description) => {
    try {
      const todoData = {
        "title": title,
        "description": description,
      };
  
      const response = await fetch('http://localhost:8000/todo/v1/todos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const newTodo = await response.json(); // Assuming the server returns the newly created todo
      console.log('Newly Created Todo:', newTodo);
      
      // mutate the 'newTodo' 
      mutate('http://localhost:8000/todo/v1/todos/', (existingTodo = []) => {
        return [...existingTodo, newTodo]
      }, false)

      // update the UI with newTodo
      settodos([...todos, newTodo])

    } catch (error) {
      console.error('Fetch error:', error);
    }
    // closing the AddNewTodo modal
    handleClose() 
  };

  async function onSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const title = formData.get('title')
    const description = formData.get('desc')
    addTodo(title, description)
  }
  
  return (
    <div className="fixed top-0 left-0 z-10 backdrop-blur-sm w-screen h-screen flex justify-center items-center">
      <div className="bg-amber-100 border-2 border-black rounded-xl text-center p-4">
        AddNewTodo
        <form onSubmit={onSubmit}>
          <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" placeholder="Title" required />
          </div>
          <div className="input-field">
              <label htmlFor="title">Description</label>
              <textarea className="resize-none" type="textarea" id="desc" name="desc" placeholder="Description" required />
          </div>
          <button className='bg-[#123456] p-2 px-4 text-amber-100 rounded-full'>Add New Todo</button>
        </form>
        
      </div>
    </div>
    
  )
}

export default AddNewTodo