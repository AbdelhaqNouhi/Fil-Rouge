import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavItems = () => {
  return (
    <header className='w-1/4 lg:w-52 md:w-1/5 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
      <div className='flex-col flex gap-10 h-screen pt-6'>
        <NavLink to="/Dashboard" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded')}><button> Travels </button></NavLink>
        <NavLink to="/User" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600  text-black hover:text-white py-1.5 px-2 rounded')}><button> Users </button></NavLink>
      </div>
    </header>
  ) 
}

export default NavItems