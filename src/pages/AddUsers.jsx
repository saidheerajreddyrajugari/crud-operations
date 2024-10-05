import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../pages/Style.css"


const AddUsers = () => {
    let [values,setValues]=useState({name:"",email:""})
    let navigate = useNavigate();

    let change=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    function addUsers(e){
        e.preventDefault();
        axios.post("http://localhost:2020/data",values)
        .then(()=>{
            navigate("/")
        })

    }
    
  return (
    <div>
      <label>Enter Name</label>
      <input type='text' name='name' value={values.name} onChange={change}></input>
      <br></br><br></br>
      <label>Enter email</label>
      <input type='email' name='email' value={values.email} onChange={change}></input>
      <br></br><br></br>
      <button onClick={addUsers}>ADD USers</button>
    </div>
  )
}

export default AddUsers