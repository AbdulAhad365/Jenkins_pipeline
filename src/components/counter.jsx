import React,{ useState  } from "react";

function Counter(){
    const [ count, setcount ]=useState(0)
    return(
        <div>
        <h1>Counte is {count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
        </div>
    )
}

export default Counter