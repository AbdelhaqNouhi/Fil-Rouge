import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'
import User_Dash from './User_Dash'
import Product_Dash from './Product_Dash'
import { Routes, Route } from 'react-router-dom'

const Admin = () => {
    return (
        <div className='flex'>
            <main className='w-full'>
                <Routes>
                    <Route path="products" element={<Product_Dash />} />
                    <Route path="/users" element={<User_Dash />} />
                </Routes>
            </main>
        </div>
    )
}

export default Admin