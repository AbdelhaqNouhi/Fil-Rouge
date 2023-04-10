import React from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import Profile from '../../assets/images/Profile/Profile.png'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'

const SideBar = () => {

  const [isLogged, setIsLogged] = useState(false);
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const role = localStorage.getItem("role");
  const sign_out = () => {
    setIsLogged(false);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("role");
    setIsLogged(false);
    Navigate('/signIn');
  };


  return (
    <div className='w-1/4 lg:w-52 md:w-1/ bg-primary px-1 text-white'>
      <div className='flex flex-col gap-6'>
        <img src={logo} alt="" className='w-25' />
        <div className='flex  items-center justify-evenly'>
          <img src={Profile} className='object-cover inset-0 h-11 w-11 rounded-full' />
          <div className='text-sm'>
            <h1>{firstName} {lastName}</h1>
            <p>{role}</p>
          </div>
        </div>
      </div>
      <div className='flex-col flex gap-64 h-screen py-1 text-white'>
        <div className='flex-col flex gap-8 py-16'>
          <NavLink to="/admin/products" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 bg-green text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600  hover:bg-green py-1.5 px-2 rounded')}><button> Travels </button></NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => (isActive ? 'text-center bg-sky-600 bg-green text-white py-1.5 px-2 rounded' : 'text-center hover:bg-sky-600   hover:bg-green  py-1.5 px-2 rounded')}><button> Users </button></NavLink>
        </div>
        <div className='w-full'>
          {/* <button onClick={() => logOut()} >
            Log out
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default SideBar