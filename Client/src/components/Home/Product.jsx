import React from 'react'
import Product1 from '../../assets/images/product/product1.png'

const Product = () => {
    return (
        <div>
            <div className='md:my-10 my-16 mx-6 md:mx-16 flex justify-evenly max-md:flex-col gap-12'>
                <div className='md:w-1/4 w-full flex flex-col gap-4 transform transition-all hover:scale-105'>
                    <div className='flex w-full relative'>
                        <img className='w-full' src={Product1} alt="" />
                        <div className='absolute w-full flex justify-end'>
                            <span className='bg-primary text-white px-6 py-1 rounded'>New</span>
                        </div>
                    </div>
                    <div className='bg-green bg-opacity-70 text-black rounded px-4 py-2 flex justify-between '>
                        <div className='py-1 flex flex-col gap-2'>
                            <h1>Coffret Dégustation</h1>
                            <p>7,99 €</p>
                        </div>
                        <button className='mb-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z" /></svg>
                        </button>
                    </div>
                </div>
                <div className='md:w-1/4 w-full flex flex-col gap-4 transform transition-all hover:scale-105'>
                    <div className='flex w-full relative'>
                        <img className='w-full' src={Product1} alt="" />
                        <div className='absolute w-full flex justify-end'>
                            <span className='bg-primary text-white px-6 py-1 rounded'>New</span>
                        </div>
                    </div>
                    <div className='bg-green bg-opacity-70 text-black rounded px-4 py-2 flex justify-between '>
                        <div className='py-1 flex flex-col gap-2'>
                            <h1>Coffret Dégustation</h1>
                            <p>7,99 €</p>
                        </div>
                        <button className='mb-auto'>
                            <img className='h-8' src={shopping} alt="" />
                        </button>
                    </div>
                </div>
                <div className='md:w-1/4 w-full flex flex-col gap-4 transform transition-all hover:scale-105'>
                    <div className='flex w-full relative'>
                        <img className='w-full' src={Product1} alt="" />
                        <div className='absolute w-full flex justify-end'>
                            <span className='bg-primary text-white px-6 py-1 rounded'>New</span>
                        </div>
                    </div>
                    <div className='bg-green bg-opacity-70 text-black rounded px-4 py-2 flex justify-between '>
                        <div className='py-1 flex flex-col gap-2'>
                            <h1>Coffret Dégustation</h1>
                            <p>7,99 €</p>
                        </div>
                        <button className='mb-auto'>
                            <img className='h-8' src={shopping} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product