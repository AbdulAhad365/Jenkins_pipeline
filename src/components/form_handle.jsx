import React,{useState} from "react";

function Form_handle(){
    // states
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [form_submit,setform_submit]=useState(null)

    // avoid the page reload to preserver the data
    const preserve_data=(event)=>{
        // to avoid the page loading
        event.preventDefault()
        setform_submit({name,email})
    }
    return (
        <div>
            <form onSubmit={preserve_data}>
                {/* name */}
                <br/><br/>
                <label>Name</label><br/>
                <input 
                    type="text"
                    name={name}
                    onChange={(e)=>setname(e.target.value)}
                    required
                 />

                 {/* email */}
                 <br/>
                 <label>Email</label><br/>
                <input 
                    type="text"
                    name={email}
                    onChange={(e)=>setemail(e.target.value)}
                    required
                 />
                <button type="submit">Submit</button>
            </form>

            {form_submit && (
                <div>
                    <h1>Result</h1>
                    <p>Name: {form_submit.name}</p>
                    <p>Email: {form_submit.email}</p>
                </div>
            )}
        </div>
    )
}
export default Form_handle