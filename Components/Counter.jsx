import { useState } from "react"
import "./Counter.css"
const Counter = () => {
    const [count, setCount] = useState(0);
    const inc=()=>{
        setCount(count+1);
    }
    const dec=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    
  return (
    <div>
        <h1>{count}</h1>
        <div className="btns">
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={inc}>+</button>
        </div>
    </div>
  )
}

export default Counter
