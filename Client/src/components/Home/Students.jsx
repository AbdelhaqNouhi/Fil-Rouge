import React from 'react'
// import StudentsImg from '../..//assets//images//img//Student.jpg'
import PrimaryButton from "../../layouts/Button/PrimaryButton";
import { Link, NavLink } from "react-router-dom";
import { useState ,useEffect } from "react";

const Students = () => {

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        }
    }, [])

    const [title, setTitle] = useState('OPEN MY ACCOUNT');
    
    return (
        <div className=' border-gray-200 text-white px-8 m-16 py-8 flex justify-between dark:text-gray-900'>
            <div className='flex flex-col gap-16 py-4'>
                <h1 className='text-blue-500 text-4xl font-bold'>Are you a student ? </h1>
                <p className='w-9/12'>With the Mozaïc package dedicated to students, take advantage of a 100% young and free offer. <br/> Open your account and enjoy a unique experience.</p>
                <div className=''>
                    {!isLogged ? (
                        <Link to="/signIn"><PrimaryButton title={title} className="hover:scale-105 duration-300 py-2 px-5 bg-white hover:text-black border rounded-xl"> Register </PrimaryButton></Link>
                    ): (
                        <Link to="/studentPage"><PrimaryButton title={ title } className="hover:scale-105 duration-300 py-2 px-5 bg-white hover:text-black border rounded-xl"> Register </PrimaryButton></Link>
                    )}
                </div>
            </div>
            <div className='w-2/5'>
                <img className='rounded-xl' alt="" />
            </div>
        </div>
    )
}

export default Students