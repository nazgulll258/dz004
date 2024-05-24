import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
  const [post,setPost] = useState([])
  const [input,setInput] = useState('')

  const newPost = () =>{
    setPost([...post,input])
    setInput('')
  }

  const deletePost = (index) =>{
    const Delete = [...post]
    Delete.splice(index,1)
    setPost(Delete)
  }
  return (
    <div className="post">
      <h1>Post</h1>
     <input
     value={input}
     onChange={e =>{
      setInput(e.target.value)
     }}

     />
     <Button onClick={newPost} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
     {post.length>0?(
      <ol>
        {post.map((posts,index) =>(
          <li key={index}>
          {posts}
          <Button onClick={() =>deletePost(index)} variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
          </li>
        ) )}

      </ol>
      
     ):(
     <h1>
      список пуст
     </h1>
     )}
    </div>
  )
}

export default Post
