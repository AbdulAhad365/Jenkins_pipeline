import React,{useState} from "react";

function Toggle(){
    const [visibility,setvisibility]=useState(false)
    const toggle=()=>{
        setvisibility(!visibility)
    }
    function return_text_secret(){
        return (
            <p>this is a secret text</p>
        )
    }
    return(
        <div>
            <button onClick={toggle}>Click me</button>
            {visibility?return_text_secret():<p>hidden text</p>}
            

        </div>
    )
}
export default Toggle