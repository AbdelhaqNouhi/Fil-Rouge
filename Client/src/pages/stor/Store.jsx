import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import Product1 from '../../assets/images/product/product1.png'
import shopping from '../../assets/images//product/shopping(2).svg'
import { useState, useEffect } from 'react'

const Store = () => {

    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    // const [description, setDescription] = useState('');
    // const [image, setImage] = useState('');
    const token = localStorage.getItem('token');
    
    const [box, setBox] = useState([])

    const GetAllProduct = async () => {
        await fetch('http://localhost:3000/product/getAll', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then((response) => response.json())
            .then((data) => (setBox(data)))
    }

    useEffect(() => {
        GetAllProduct();
    }, [])
    
    return (
        <div className='my-10 mx-6 md:mx-16 flex flex-col gap-12 max-sm:gap-8'>
            <div className='flex md:justify-between w-full md:mx-16 max-sm:flex-col'>
                <h1 className='font-medium text-3xl'>Our Products</h1>
                <p className='font-medium text-md w-1/2 md:mx-16 max-sm:w-full'>High quality dates coated with chocolate. No added sugar, no added salt, Your boxes are prepared on demand to guarantee optimal quality and freshness.</p>
            </div>
            <div className="bg-white text-black top-0 px-8 py-2 md:mx-16 rounded shadow-sm items-center justify-center">
                <div className='flex items-center justify-between max-sm:flex-col gap-6'>
                    <div className='flex gap-10'>
                        <div className='Shearch'>
                            <div className='absolute mx-2 my-3'>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7536 13.5706L11.9212 10.7465C12.835 9.58229 13.3309 8.14459 13.329 6.66452C13.329 5.3464 12.9382 4.05789 12.2059 2.96191C11.4736 1.86594 10.4327 1.01173 9.21492 0.507309C7.99714 0.00288761 6.65713 -0.129092 5.36434 0.12806C4.07155 0.385212 2.88404 1.01995 1.952 1.952C1.01995 2.88404 0.385212 4.07155 0.12806 5.36434C-0.129092 6.65713 0.00288761 7.99714 0.507309 9.21492C1.01173 10.4327 1.86594 11.4736 2.96191 12.2059C4.05789 12.9382 5.3464 13.329 6.66452 13.329C8.14459 13.3309 9.58229 12.835 10.7465 11.9212L13.5706 14.7536C13.6481 14.8317 13.7402 14.8936 13.8417 14.9359C13.9432 14.9782 14.0521 15 14.1621 15C14.2721 15 14.381 14.9782 14.4825 14.9359C14.584 14.8936 14.6761 14.8317 14.7536 14.7536C14.8317 14.6761 14.8936 14.584 14.9359 14.4825C14.9782 14.381 15 14.2721 15 14.1621C15 14.0521 14.9782 13.9432 14.9359 13.8417C14.8936 13.7402 14.8317 13.6481 14.7536 13.5706ZM1.66613 6.66452C1.66613 5.67593 1.95928 4.70955 2.50851 3.88757C3.05774 3.06558 3.83838 2.42493 4.75172 2.04661C5.66506 1.6683 6.67007 1.56931 7.63966 1.76218C8.60925 1.95504 9.49988 2.43109 10.1989 3.13013C10.898 3.82916 11.374 4.71979 11.5669 5.68938C11.7597 6.65898 11.6607 7.66399 11.2824 8.57732C10.9041 9.49066 10.2635 10.2713 9.44148 10.8205C8.6195 11.3698 7.65311 11.6629 6.66452 11.6629C5.33887 11.6629 4.06751 11.1363 3.13013 10.1989C2.19275 9.26154 1.66613 7.99018 1.66613 6.66452Z" fill="#A3DE83" />
                                </svg>
                            </div>
                            <div className='InputSearch'>
                                <input className=' px-8 py-1.5 w-[392px] p-2 border-b rounded outline-none' type="search" placeholder='Quick Search ... ' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-10 text-sm'>
                        <button className='hover:border-b-2 border-green'>All</button>
                        <button className='hover:border-b-2 border-green'>naturelle</button>
                        <button className='hover:border-b-2 border-green'>Chocolate</button>
                        <button className='hover:border-b-2 border-green'>fruits</button>
                        <button className='hover:border-b-2 border-green'>Cacao</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly flex-wrap max-md:flex-col gap-12'>
                {box && box.length > 0 && box.map((boxObj, index) => (
                    <div className='md:w-1/4 w-full flex flex-col gap-4 transform transition-all hover:scale-105'>
                        <div className='flex w-full relative'>
                            <img className='w-full' src={Product1} alt="" />
                            <div className='absolute w-full flex justify-end'>
                                <span className='bg-primary text-white px-6 py-1 rounded'>New</span>
                            </div>
                        </div>
                        <div className='bg-green bg-opacity-70 text-black rounded px-4 py-2 flex justify-between '>
                            <div className='py-1 flex flex-col gap-2'>
                                <h1>{boxObj.name}</h1>
                                <p>{boxObj.price} DH</p>
                            </div>
                            <button className='mb-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px" ><path d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    )
}

export default Store