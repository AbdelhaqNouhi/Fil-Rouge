import React from 'react'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
    return (
        <header className='md:px-16 sm:px-10 px-4 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-5 flex justify-between items-center'>
            <h1 className=' text-black hover:text-sky-600 font-bold text-2xl'>Dashbord</h1>

            <div class="">
                <input className='items-center w-40 md:w-80 max-w-xs px-3 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-600  focus:ring-sky-600' type='text' placeholder='Shearch' />
            </div>
            
            <div className='flex space-x-4 items-center'>
                <h1 className='hover:text-sky-600'>Abdelhaq Nouhi</h1>
                <img src={logo} className='object-cover inset-0 h-9 w-9 rounded-full'></img>
            </div>
        </header>
    )
}

export default NavBar