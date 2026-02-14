// import { useState , useEffect} from "react"

// const Quotes = () => {
//     const [val,setVal] = useState([])
//     const [idx , setIdx] = useState(1);

//     useEffect(()=>{
//         fetch('https://dummyjson.com/quotes').then(res=>res.json()).then(data=>setVal(data.quotes));
//     },[])

//     const handlePrev=()=>{
//         if(idx>0){
//             setIdx(idx-1);
//         }
//     }

//     const handleNext=()=>{
//         if(idx < val.length - 1){
//             setIdx(idx+1)
//         }
//     }

//   return (
//     <div>
//       <div className="container">
//         {/* <ul>
//             {val.map(item=>{
//                 return <li key={idx}>
//                     <button onClick={()=>{handlePrev()}}>Prev</button>
//                     {item.quote} 
//                     <button onClick={()=>{handleNext()}}>Next</button>
//                     </li>
//             })}
//         </ul> */}
       
//         {val.length > 0 ? (
//             <>
            
//             <p>{val[idx].quote}</p>
//             <button onClick={()=>{handlePrev()}} disabled={idx === 0}>Prev</button>
//             <button onClick={()=>{handleNext()}} disabled={idx === val.length - 1}>Next</button>
//             <p>{val[idx].author}</p>
//             </>
//         ) : (
//            <h2>Loading....</h2>
//         )}

//       </div>
//     </div>
//   )
// }

// export default Quotes


import { useState , useEffect} from "react"

const Quotes = () => {
    const [val,setVal] = useState([])
    const [idx , setIdx] = useState(1);

    useEffect(()=>{
        fetch('https://dummyjson.com/quotes').then(res=>res.json()).then(data=>setVal(data.quotes));
    },[])

    const handlePrev=()=>{
        if(idx>0){
            setIdx(idx-1);
        }
    }

    const handleNext=()=>{
        if(idx < val.length - 1){
            setIdx(idx+1)
        }
    }

  return (
    <div>
      <div className="container">
        {/* <ul>
            {val.map(item=>{
                return <li key={idx}>
                    <button onClick={()=>{handlePrev()}}>Prev</button>
                    {item.quote} 
                    <button onClick={()=>{handleNext()}}>Next</button>
                    </li>
            })}
        </ul> */}
       
        {val.length > 0 ? (
            <>
            
            <p>{val[idx].quote}</p>
            <button onClick={()=>{handlePrev()}} disabled={idx === 0}>Prev</button>
            <button onClick={()=>{handleNext()}} disabled={idx === val.length - 1}>Next</button>
            <p>{val[idx].author}</p>
            </>
        ) : (
           <h2>Loading....</h2>
        )}

      </div>
    </div>
  )
}

export default Quotes
