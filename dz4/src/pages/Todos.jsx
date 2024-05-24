import axios from "axios"
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Todos = () => {
    const [todo,setTodo] = useState([])


    useEffect(() =>{
        const getRequest = async() =>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=40`)
    setTodo(response.data)
    } 
    getRequest()
    },[])
   
  return (
   
    <div className='todos'>
       <h1>todos</h1>
      {todo?(
       <ol>
        {todo.map((todos) =>(
            <li key={todos.id}>
                {todos.title}
                <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
            </li>

        ))}
       </ol>
      ):(
         <p>список пуст</p>
      )}
    </div>
  )
}

export default Todos
