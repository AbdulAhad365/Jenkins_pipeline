import React,{useEffect, useState} from "react";
import "./css/darkmode.css"

function Dark_mode(){
    const [mode,setmode]=useState(true)

    const toogle_val=()=>{
        setmode(!mode)
    }

    // use effect
    useEffect(()=>{
        document.body.className=mode?"light-mode":"dark-mode"
    },[mode])
    return (
        <div>
            <button onClick={toogle_val}>Click me</button>
            {mode?"Light-mode":"Dark-mode"}
            <p className={mode?"light-mode":"dark-mode"}>welcome jere</p>
            
        </div>

    )
}
export default Dark_mode