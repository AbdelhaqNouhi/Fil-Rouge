import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Profile from "./pages/client/Profile"
import Store from "./pages/stor/Store"
import Admin from "./components/Admin/Admin"
import Product_Dash from "./components/Admin/Product_Dash"
import Users_Dash from "./components/Admin/User_Dash"
import ErrorPage from './pages/error/ErrorPage'
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {

  const [show , setShow] = useState(false)

  const handleShow = () => {
    const role = localStorage.getItem('role')
    if (role === 'admin') {
      setShow(true)
    }
  }

  useEffect(() => {
    handleShow()
  }, [])

  return (
    <div className="App font-body bg-secondary bg-opacity-5">
      <Router>
        {
          !show ? <Navbar /> : ''
        }

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/store" element={<Store />} />

          {/* nested route in admin */}
          <Route path="/admin/*" element={<Admin />}>
            <Route path="products" element={<Product_Dash />} />
            <Route path="users" element={<Users_Dash />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        {
          !show ? <Footer /> : ''
        }
      </Router>
    </div>
  )
}

export default App
