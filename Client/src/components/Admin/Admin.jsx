import React from 'react'
import NavBar from './NavBar'
import NavItems from './NavItems'
import Product_Dash from './Product_Dash'

const Admin = () => {
    return (
        <div>
            <NavBar />
            <div className='flex'>
                <NavItems />
                <div className='flex justify-center w-full '>
                    <Product_Dash />
                </div>
            </div>
        </div>
    )
}

export default Admin