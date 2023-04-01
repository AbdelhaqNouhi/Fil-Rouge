import React from 'react'
import Product1 from '../../assets/images/product/product1.png'
import shopping from '../../assets/images//product/shopping.svg'

const Product = () => {
    return (
        <div>
            <div className='md:my-10 my-16 mx-6 md:mx-16 flex justify-evenly max-md:flex-col gap-12'>
                <div className='md:w-1/4 w-full flex flex-col gap-4 transform transition-all hover:scale-105'>
                    <div className='flex w-full relative'>
                        <img className='w-full' src={Product1} alt="" />
                        <div className='absolute w-full flex justify-end'>
                            <span className='bg-[#4E4A42] text-white px-6 py-1 rounded'>New</span>
                        </div>
                    </div>
                    <div className='bg-[#B8C89D] text-white rounded px-4 py-2 flex justify-between '>
                        <div className='py-1 flex flex-col gap-2'>
                            <h1>Coffret Dégustation</h1>
                            <p>7,99 €</p>
                        </div>
                        <div className='mb-auto'>
                            <img className='h-8' src={shopping} alt="" />
                        </div>
                    </div>
                </div>
                <div className='md:w-1/4 w-full flex flex-col gap-4 transform transition-all hover:scale-105'>
                    <div className='flex w-full relative'>
                        <img className='w-full' src={Product1} alt="" />
                        <div className='absolute w-full flex justify-end'>
                            <span className='bg-[#4E4A42] text-white px-6 py-1 rounded'>New</span>
                        </div>
                    </div>
                    <div className='bg-[#B8C89D] text-white rounded px-4 py-2 flex justify-between '>
                        <div className='py-1 flex flex-col gap-2'>
                            <h1>Coffret Dégustation</h1>
                            <p>7,99 €</p>
                        </div>
                        <div className='mb-auto'>
                            <img className='h-8' src={shopping} alt="" />
                        </div>
                    </div>
                </div>
                <div className='md:w-1/4 w-full flex flex-col gap-4 transform transition-all hover:scale-105'>
                    <div className='flex w-full relative'>
                        <img className='w-full' src={Product1} alt="" />
                        <div className='absolute w-full flex justify-end'>
                            <span className='bg-[#4E4A42] text-white px-6 py-1 rounded'>New</span>
                        </div>
                    </div>
                    <div className='bg-[#B8C89D] text-white rounded px-4 py-2 flex justify-between '>
                        <div className='py-1 flex flex-col gap-2'>
                            <h1>Coffret Dégustation</h1>
                            <p>7,99 €</p>
                        </div>
                        <div className='mb-auto'>
                            <img className='h-8' src={shopping} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product