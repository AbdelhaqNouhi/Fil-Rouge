import React from 'react'
import SalariesImg from '../../assets/images/img/Salaries.jpg'
import PrimaryButton from "../../layouts/Button/PrimaryButton";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Salaries = () => {
    const [title, setTitle] = useState('OPEN MY ACCOUNT');

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        }
    }, [])

    return (
        <div className=' border-gray-200 text-white px-8 m-16 py-8 flex justify-between dark:text-gray-900'>
            <div className='w-2/5'>
                <img className='rounded-xl' src={ SalariesImg } alt="" />
            </div>
            <div className='flex flex-col gap-16 py-4'>
                <h1 className='text-blue-500 text-4xl font-bold'>Are you an entrepreneur ?</h1>
                <p className=''>Because your needs grow with your ambitions, Crédit du Maroc, <br/> offers you the Global Plus package to support you in your life projects. <br/> Open your account and enjoy a unique experience.</p>
                <div className=''>
                    {!isLogged ? (
                        <Link to="/signIn"><PrimaryButton title={title} className="hover:scale-105 duration-300 py-2 px-5 bg-white hover:text-black border rounded-xl"> Register </PrimaryButton></Link>
                    ) : (
                        <Link to="/salariesPage"><PrimaryButton title={ title } className="hover:scale-105 duration-300 py-2 px-5 bg-white hover:text-black border rounded-xl"> Register </PrimaryButton></Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Salaries