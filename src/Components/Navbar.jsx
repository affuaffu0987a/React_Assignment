import React, { useState } from 'react'
import { useGlobalContext } from '../ContextApi/Store'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  const { Queries, setQueries } = useGlobalContext()

  return (
    <>
      <nav className='flex justify-center w-full h-36 p-3 items-center '>
        <div className='navbar w-4/5 flex justify-between items-center'>
          <Link to='/'><h1 className='text-2xl font-bold'>❍ MYSHOWS</h1></Link>
          <div className='search w-[30%] flex border border-gray-400 overflow-hidden rounded-lg'>
            <input
              type='text'
              name='search'
              placeholder='search for a shows'
              className='w-full p-2 outline-none  bg-transparent'
              onChange={(e) => setQueries(e.target.value)}
            />
            <button type='submit' className='bg-black px-4 text-white'>Search</button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar