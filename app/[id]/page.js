'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const page = ({params})=>{
    const { id } = params

    const [user, setUser] = useState([])
    const getUsers = async () =>{
    try{
    
        const res =   await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        const data = res.data
      setUser(data)
    }
    catch (error){
      console.error("Error fetching the user:", error);
    }
 
  }

useEffect(() =>{
  getUsers()
},[])
    return <>
   
    <div className='bg-slate-400 font-semibold italic p-20 mt-8 my-16'>
    <h1 className='text-slate-800 font-bold'>THE DATA DETAILS IS:</h1>
    <br></br>
    {JSON.stringify(user)}
    <br></br>   
    </div>
    </>   
}
export default page