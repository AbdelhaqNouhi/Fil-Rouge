import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'

const Admin = () => {
    return (
        <div className='flex'>
            <nav>
                <Sidebar />
            </nav>
            <main className='w-full'>
                <Outlet />
            </main>
        </div>
    )
}

export default Admin