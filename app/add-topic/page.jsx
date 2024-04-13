import React from 'react'

const page = () => {
  return (
    <form className='flex flex-col gap3'>
      <h1>Add topic</h1>
      <input className='border border-slate-500 px-8 py-2 m-4' type="text" placeholder="Title"/>
      <input className='border border-slate-500 px-8 py-2 m-4' type="text" placeholder="description"/>
    <button className="bg-green-500 rounded-lg text-white font-bold py-3 w-fit px-8 just">Add</button>
    </form>
  )
}

export default page
