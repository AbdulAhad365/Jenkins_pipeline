import React,{useState} from "react";

function Item_addition(){
    const [name,setname]=useState("")
    // const [email,setemail]=useState("")
    const [list_elements,setlist_elements]=useState([])

    const handle_page_loading=(event)=>{
        event.preventDefault()

        if (name.trim()===""){
            return
        }

        // add to the list
        setlist_elements([...list_elements,name])
        // finish the stored predefiend value
        setname("")
    }

    return (
        <div>

            <form onSubmit={handle_page_loading}>
                {/* Name: */}
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e)=>setname(e.target.value)}/>

                {/* email: */}
                {/* <br/>
                <label>Email:</label>
                <input type="text" name={email} onChange={(e)=>setemail(e.target.value)}/> */}

                {/* submit button */}
                <br/><br/>
                <button type="submit">Append</button>
                <button type="button" onClick={()=>setlist_elements([])}>Clear</button>

            </form>
            <ul>
                {list_elements.map((val,index)=>(
                    <li key={index}>{val}</li>
                ))}
            </ul>
        </div>
    )
}
export default Item_addition