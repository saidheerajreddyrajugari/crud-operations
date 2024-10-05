import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../pages/Style.css"


const UpdateUsers = () => {
    let [values,setValues]=useState({name:"",email:""})
    let navigate = useNavigate();

    let change=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    let {id}=useParams();
    useEffect(()=>{
        axios.get("http://localhost:2020/data/"+id)
        .then(x=>setValues(x.data))
    },[])
    function update(e){
        e.preventDefault();
        axios.put("http://localhost:2020/data/"+id,values)
        .then(()=>{
            navigate("/")
        })
    }
   
    
  return (
    <div>
    <h1>You can make some Changes</h1>
      <label>Enter Name</label>
      <input type='text' name='name' value={values.name} onChange={change}></input>
      <br></br><br></br>
      <label>Enter email</label>
      <input type='email' name='email' value={values.email} onChange={change}></input>
      <br></br><br></br>
      <button onClick={update}>ADD USers</button>
    </div>
  )
}

export default UpdateUsers