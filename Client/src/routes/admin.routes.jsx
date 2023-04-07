import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import Product_Dash from '../components/Admin/Product_Dash'
import Users_Dash from '../components/Admin/User_Dash'
import LoginAdmin from '../components/Admin/LoginAdmin'

const admin = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/Dashboard" element={<Admin />} />
                    <Route path="/Dashboard" element={<Product_Dash />} />
                    <Route path="/User" element={<Users_Dash />} />
                    <Route path="/LoginAdmin" element={<LoginAdmin />} />
                </Routes>
            </Router>
        </div>
    )
}

export default admin