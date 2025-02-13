import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Usercreate = () => {
  const API_URL="https://jsonplaceholder.typicode.com/users"
   const [data,setdata]=useState([])
   const [formdata,setformdata]=useState({name:'',username:'',email:'',phone:'',website:''})
   const [updatedata,setupdatedata]=useState(null)

  useEffect(()=>{
   axios.get(API_URL)
   .then((Response)=>{
     console.log(Response.data);
       setdata(Response.data)
   })
},[])

  const handleonchange=(e)=>{
     const {name,value}=e.target
     setformdata({...formdata,[name]:value}) 
  }
  const handleformsubmit=(e)=>{
     e.preventDefault()
   if(updatedata){
      axios.put(`${API_URL}/${updatedata}`,formdata)
      .then((Response)=>{
         setdata(data.map((item)=>item.id===updatedata?Response.data:item))
         setupdatedata(null);
         setformdata({name:'',username:'',email:'',phone:'',website:''})
      })
   }else{
    axios.post(API_URL,formdata)
    .then((Response)=>{
        console.log(Response.data);
      setdata([...data,Response.data])         
      setformdata({name:'',username:'',email:'',phone:'',website:''})
    })
   }
  }
  const handledelete=(id)=>{
    axios.delete(`${ API_URL }/${id}`)
    setdata(data.filter((item)=>item.id!==id))
  }

  const handleupdate=(id)=>{
   const userupdate=data.find((item)=>item.id===id);
   setformdata(userupdate);
   setupdatedata(id);
  }
  return (
    <>
       <center><h3>create user</h3><br></br>
         <form onSubmit={handleformsubmit}>
          Name:
          <input type='text' name='name' id='name' value={formdata.name} onChange={handleonchange} />
          Username:
          <input type='text' name='username' id='username' value={formdata.username} onChange={handleonchange}/>
          Email:
          <input type='text' name='email' id='email' value={formdata.email} onChange={handleonchange} />
          Phone Number:
          <input type='text' name='phone' id='phone' value={formdata.phone} onChange={handleonchange}/>
          Website:
          <input type='text' name='website' id='website'  value={formdata.website} onChange={handleonchange}/>
          <button>{updatedata ? "Update Data" : "Add Data"}</button>
          </form>
       </center> 
      <ul>
         {data.map((user)=>(
            <li key={user.id}>
            <p><strong>Id:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Useremail:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
             <button onClick={()=>handledelete(user.id)}>Delete</button>
             <button onClick={()=>handleupdate(user.id)}>Update</button>
            <br></br>
            </li>
         ))}
      </ul>
    </>
  )
}

export default Usercreate