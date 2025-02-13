import React, { useState } from 'react'

const CreateForm = () => {
    const [formdata,setformdata]=useState({
         username:'',email:"",password:''
    })
    const [error,seterror]=useState({});

    const handlechange=(e)=>{
        const {name,value}=e.target
        setformdata({...formdata,[name]:value})
        seterror({...error,[name]:""})
    }

    const validate=()=>{
         const newErrors={};
         if(!formdata.username.trim())newErrors.username="Name is required"

          if(!/^\S+@\S+\.\S+$/.test(formdata.email)){
            newErrors.email="Email is required !";
          }

          if(formdata.password.length<6){
            newErrors.password="Password must be at least 6 characters!";
          }

         seterror(newErrors)
          return Object.keys(newErrors).length===0;
    }

    const handleformsubmit=(e)=>{
        e.preventDefault()
        if(!validate())return;
        alert('form sueccsfully')
        console.log(formdata)
        setformdata({username:'',email:"",password:''})
        seterror({})
 
    }
  return (
     <form onSubmit={handleformsubmit}>
       <div>
      User Name:
       <input type="text" placeholder="Enter your name" name='username' 
        value={formdata.username} onChange={handlechange}
       />
        <span style={{color:"red"}}>{error.username}</span>
       </div>
       <div>
       Email:
       <input type="email" placeholder="Enter your email" name='email'  value={formdata.email} onChange={handlechange}/>
       <span style={{color:"red"}}>{error.email}</span>
       </div>
       <div>
       Password:
       <input type='password' placeholder='Enter your password' name='password'  value={formdata.password} onChange={handlechange}/>
       <span style={{color:"red"}}>{error.password}</span>
       </div>
       <button>Submit</button>
     </form>
  ) 
}

export default CreateForm