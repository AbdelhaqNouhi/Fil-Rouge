import React from 'react'
import logo from '../../assets//images//logo.png'
import Profile from '../../assets/images/Profile/Profile.png';
import { useState } from 'react';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <div className='md:px-6 sm:px-10 px-4 text-white bg-primary py-3 flex justify-between items-center'>
                <div class="">
                    <input className='items-center w-40 md:w-80 max-w-xs px-3 py-1 bg-white bg-opacity-20 rounded-md text-sm placeholder-slate-400 focus:outline-none' type='text' placeholder='Shearch' />
                </div>

                <div className='flex space-x-4 items-center'>
                    <h1 className='hover:text-sky-600'>Abdelhaq Nouhi</h1>
                    <img src={Profile} className='object-cover inset-0 h-9 w-9 rounded-full' />
                </div>
            </div>
            <div className="flex flex-col w-24 top-4">
                <div className="flex items-center justify-end">
                    <button
                        className="text-white focus:outline-none"
                        onClick={handleToggle}
                    >
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className={`${isOpen ? "hidden" : "block"}`}
                                d="M3 12h18a1 1 0 110 2H3a1 1 0 110-2zm0-5h18a1 1 0 110 2H3a1 1 0 110-2zm0 10h18a1 1 0 110 2H3a1 1 0 110-2z"
                            />
                            <path
                                className={`${isOpen ? "" : "hidden"}`}
                                d="M4.293 5.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 011.414 1.414l-6.293 6.293 6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414l6.293-6.293-6.293-6.293a1 1 0 010-1.414z"
                            />
                        </svg>
                    </button>
                </div>
                <nav
                    className={`${isOpen ? "block" : "hidden"
                        } h-1/2 space-y-8 text-gray-400 bg-primary`}
                >
                    <a href="#" className="block py-2.5 hover:text-white">
                        Dashboard
                    </a>
                    <a href="#" className="block py-2.5 hover:text-white">
                        Customers
                    </a>
                    <a href="#" className="block py-2.5 hover:text-white">
                        Orders
                    </a>
                    <a href="#" className="block py-2.5 hover:text-white">
                        Products
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default NavBar