import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export function Searchbar({setSearch}) {
 const handleSubmit = (e)=>{
    e.preventDefault()
 }
  return (
    <form onSubmit={handleSubmit} className='w-full mb-2 border-gray-400 border rounded-lg px-4  backdrop-blur-sm bg-white/50 flex items-center'>
     <IoSearchOutline/>
     <input className='w-full p-3 bg-transparent focus:outline-none' 
            placeholder='Enter Country Name'
            onChange={(e)=>setSearch(e.target.value)}
     />
    </form>
  )
}

