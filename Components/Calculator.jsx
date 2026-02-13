// import { useState } from "react"
// import "./Calculator.css"

// const Calculator = () => {
//     const [val , setVal] = useState("");
//     const calculated=()=>{
//         setVal(eval(val).toString());
//     }
//     const clearAll=()=>{
//         setVal("")
//     }

//   return (
//     <div>
//         <h3>{val}</h3>
//       <div className="calc">
//         <button className="item" onClick={() => setVal(val + "1")}>1</button>
//         <button className="item" onClick={()=>setVal(val+"2")}>2</button>
//         <button className="item" onClick={()=>setVal(val+"3")}>3</button>
//         <button className="item" onClick={()=>setVal(val+"4")}>4</button>
//         <button className="item" onClick={()=>setVal(val+"5")}>5</button>
//         <button className="item" onClick={()=>setVal(val+"6")}>6</button>
//         <button className="item" onClick={()=>setVal(val+"7")}>7</button>
//         <button className="item" onClick={()=>setVal(val+"8")}>8</button>
//         <button className="item" onClick={()=>setVal(val+"9")}>9</button>
//         <button className="item" onClick={()=>setVal(val+"0")}>0</button>
//         <button className="item" onClick={()=>setVal(val+"+")}>+</button>
//         <button className="item" onClick={()=>setVal(val+"-")}>-</button>
//         <button className="item" onClick={()=>setVal(val+"*")}>*</button>
//         <button className="item" onClick={()=>setVal(val+"/")}>/</button>
//         <button className="item" onClick={()=>calculated()}>=</button>
//         <button className="item" onClick={()=>clearAll()}>C</button>
//       </div>
//     </div>
//   )
// }

// export default Calculator


import { useState } from "react"
import "./Calculator.css"

const Calculator = () => {
    const [val , setVal] = useState("");
    const calculated=()=>{
        setVal(eval(val).toString());
    }
    const clearAll=()=>{
        setVal("")
    }

  return (
    <div>
        <h3>{val}</h3>
      <div className="calc">
        <button className="item" onClick={() => setVal(val + "1")}>1</button>
        <button className="item" onClick={()=>setVal(val+"2")}>2</button>
        <button className="item" onClick={()=>setVal(val+"3")}>3</button>
        <button className="item" onClick={()=>setVal(val+"4")}>4</button>
        <button className="item" onClick={()=>setVal(val+"5")}>5</button>
        <button className="item" onClick={()=>setVal(val+"6")}>6</button>
        <button className="item" onClick={()=>setVal(val+"7")}>7</button>
        <button className="item" onClick={()=>setVal(val+"8")}>8</button>
        <button className="item" onClick={()=>setVal(val+"9")}>9</button>
        <button className="item" onClick={()=>setVal(val+"0")}>0</button>
        <button className="item" onClick={()=>setVal(val+"+")}>+</button>
        <button className="item" onClick={()=>setVal(val+"-")}>-</button>
        <button className="item" onClick={()=>setVal(val+"*")}>*</button>
        <button className="item" onClick={()=>setVal(val+"/")}>/</button>
        <button className="item" onClick={()=>calculated()}>=</button>
        <button className="item" onClick={()=>clearAll()}>C</button>
      </div>
    </div>
  )
}

export default Calculator
