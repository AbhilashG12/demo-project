// import { useState , useEffect } from "react";


// const Meals = () => {
//     const [val , setVal] = useState([]);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>setVal(data));
//     },[val])
//   return (
//     <div>
//         <ul>
//             {val.map(item=>{
//         return <li key={Math.random()}>{item.title}</li>
//       })}
//         </ul>
      
//     </div>
//   )
// }

// export default Meals


import { useState , useEffect } from "react";


const Meals = () => {
    const [val , setVal] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>setVal(data));
    },[val])
  return (
    <div>
        <ul>
            {val.map(item=>{
        return <li key={Math.random()}>{item.title}</li>
      })}
        </ul>
      
    </div>
  )
}

export default Meals
