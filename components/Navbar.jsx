import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link className='text-white font-bold' href={'/'}>ToDo App</Link>
      <Link className='bg-green-500 p-2 text-white rounded-lg shadow-lg font-bold' href={'/add-topic'}>Add Topic</Link>
    </nav>
  )
}

export default Navbar
