import React from 'react'
import logo from '../../assets//images//logo.png'
import Profile from '../../assets/images/Profile/Profile.png';

const NavBar = () => {
    return (
        <header className='md:px-6 sm:px-10 px-4 text-white bg-primary py-3 flex justify-between items-center'>
            <img className="flex items-center w-32" src={logo} alt="logo" />

            <div class="">
                <input className='items-center w-40 md:w-80 max-w-xs px-3 py-1 bg-white bg-opacity-20 rounded-md text-sm placeholder-slate-400 focus:outline-none' type='text' placeholder='Shearch' />
            </div>
            
            <div className='flex space-x-4 items-center'>
                <h1 className='hover:text-sky-600'>Abdelhaq Nouhi</h1>
                <img src={Profile} className='object-cover inset-0 h-9 w-9 rounded-full'/>
            </div>
        </header>
    )
}

export default NavBar