import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Profile from '../../assets/images/Profile/Profile.png'
import logo from '../../assets/images/logo.png'

const SideBar = () => {
  return (
    <div className='w-1/4 lg:w-52 md:w-1/ bg-primary px-1 text-white'>
      <div className='flex flex-col gap-6'>
        <img src={logo} alt="" className='w-25' />
        <div className='flex  items-center justify-evenly'>
          <img src={Profile} className='object-cover inset-0 h-11 w-11 rounded-full' />
          <div className='text-sm'>
            <h1>Abdelhaq Nouhi</h1>
            <p>admin</p>
          </div>
        </div>
      </div>
      <div className='flex-col flex gap-64 h-screen py-1 text-white'>
        <div className='flex-col flex gap-8 py-16'>
          <NavLink to="/admin/products" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 bg-green text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600  hover:bg-green py-1.5 px-2 rounded')}><button> Travels </button></NavLink>
          <NavLink to="/admin/Users" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 bg-green text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600   hover:bg-green  py-1.5 px-2 rounded')}><button> Users </button></NavLink>
        </div>
        <div className='w-full'>
        </div>
      </div>
    </div>
  )
}

export default SideBar