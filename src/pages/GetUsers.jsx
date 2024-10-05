import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../pages/Style.css"

const GetUsers = () => {
    let [state,setState]=useState([]);
    let [head,sethead]=useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:2020/data")
        .then(res=>{
            setState(res.data)
            sethead(Object.keys(res.data[0]).slice(0,4))
        });
       
        
    },[state])
    // console.log(state);
    function deletes(id){
        axios.delete("http://localhost:2020/data/"+id)
        .then(()=>{
            navigate("/")
        })
    }
    
  return (
    
      <table border="1" id='table' cellSpacing="9px">
      <caption>CRUD OPERATIONS <button onClick={()=>navigate("/add")}>Add+</button></caption>
        <thead>
            <tr>
                {head.map((x,i)=> <th key={i}>{x}</th>)}
                <th>Operations</th>
            </tr>
        </thead>
        <tbody>
            {state.map((x,i)=>{
                return(
                    <tr key={x.id}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.username}</td>
                        <td>{x.email}</td>
                        <td>
                        <button onClick={()=>navigate(`/edit/${x.id}`)}className='edi'>Edit</button>
                        <button onClick={()=>deletes(x.id)} className='del'>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    
  )
}

export default GetUsers