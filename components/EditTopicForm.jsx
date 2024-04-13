"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';



const EditTopicForm = ({ title, description, id }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(!newTitle || !newDescription){
      alert("Please enter title & description");
      return;
    }
  
    try {    
     
      const res =  await fetch(`http://localhost:3000/api/topics/${id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({newTitle, newDescription})
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
  };
  return (
    <form className="flex flex-col gap3" onSubmit={handleOnSubmit}>
      <h1>Edit topic</h1>
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="border border-slate-500 px-8 py-2 m-4"
        type="text"
        placeholder="Title"
      />
      <input
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="border border-slate-500 px-8 py-2 m-4"
        type="text"
        placeholder="description"
      />
      <button
        type="submit"
        className="bg-green-500 rounded-lg text-white font-bold py-3 w-fit px-8 just"
      >
        Update
      </button>
    </form>
  );
};

export default EditTopicForm;
