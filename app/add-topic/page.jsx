"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const router = useRouter();
const baseUrl = process.env.BASE_URL;

const handleSubmit = async(e) => {
 
  e.preventDefault();
  if(!title || !description){
    alert("Please enter title & description");
    return;
  }

  try {    
   
    const res =  await fetch('http://localhost:3000/api/topics',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description})
    });

    if(res.ok){    
      router.refresh(); 
      router.push('/')
    }else{
      throw new Error("Failed to create an topic")
    }
  } catch (error) {
    console.log(error.message);
  }
}
  


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap3'>
      <h1>Add topic</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value) } className='border border-slate-500 px-8 py-2 m-4' type="text" placeholder="Title"/>
      <input value={description} onChange={(e) => setDescription(e.target.value) } className='border border-slate-500 px-8 py-2 m-4' type="text" placeholder="description"/>
    <button type='submit' className="bg-green-500 rounded-lg text-white font-bold py-3 w-fit px-8 just">Add</button>
    </form>
  )
}

export default page;
