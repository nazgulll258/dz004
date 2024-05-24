import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const UserForm = () => {
  const {register,reset,handleSubmit} = useForm()
  const dispatch = useDispatch()
  const onsubmit = (data) =>{
    reset()
    dispatch({type:'ADDUSER', payload:{name:data.name,email:data.email,age:data.age,gender:data.gender,profile:data.profile} })
  }
  return (
    <div>
      <Box >
      <form onSubmit={handleSubmit(onsubmit)} style={{display:'flex',justifyContent:'center',gap:'30px'}}>
      <TextField
      
        placeholder="name"
        
        label="name" {...register('name')}  style={{fontSize:'17px', width:'200px',height:'55px'}}/>
         <TextField
        placeholder="email"
        

        label="email"  type="email  "{...register('email')} style={{fontSize:'17px', width:'200px',height:'55px'}}/>   
        <TextField
        placeholder="age"
        type="number"
        label="age" {...register('age')} style={{fontSize:'17px', width:'200px',height:'55px'}}/>     
          <select {...register('gender')} style={{fontSize:'17px', width:'200px',height:'55px'}}>
            <option>man</option>
            <option>woman</option>

            </select>    
            <select {...register('profile')} style={{fontSize:'17px', width:'200px',height:'55px'}}>
            <option>public</option>
            <option>private</option>

            </select>  
            <Button  type="submit" style={{fontSize:'17px', width:'200px',height:'55px'}}variant="outlined">send</Button>
      </form>
      </Box>
    </div>
  )
}

export default UserForm