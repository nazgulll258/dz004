import { useDispatch, useSelector } from "react-redux";
import "../App"

import Button from '@mui/material/Button';

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state =>state.counter.count)


  const increment = () =>{
    dispatch({type:'INCREMENT'})
  }
  const decrement = () =>{
    dispatch({type:'DECREMENT'})
  }
  return (
    <div className="counter">
     <h1>counter</h1> 
       <Button  onClick={decrement} variant="contained" disableElevation>
        -
    </Button>
      <span>{count}</span>
      <Button onClick={increment} variant="contained" disableElevation>
      +
    </Button>
    </div>
  )
}

export default Counter
