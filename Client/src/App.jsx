import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Profile from "./pages/client/Profile"
import Store from "./pages/stor/Store"
import Admin from "./components/Admin/Admin"
import Product_Dash from "./components/Admin/Product_Dash"
import Users_Dash from "./components/Admin/User_Dash"
import LoginAdmin from "./components/Admin/LoginAdmin"
import user from './routes/user.routes'
import admin from './routes/admin.routes'
import NavBar from './components/NavBar'
import NavBarAdmin from './components/Admin/NavBarAdmin'

import ErrorPage from './pages/error/ErrorPage'

function App() {
  
  return (
    <div className="App font-body bg-secondary bg-opacity-5">
      <Router>
        {/* {isAdmin ? <NavBarAdmin /> : <NavBar />} */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/store" element={<Store />} />

          <Route path="/Dashboard" element={<Admin />} />
          <Route path="/Dashboard" element={<Product_Dash />} />
          <Route path="/User" element={<Users_Dash />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

        {/* {isAdmin ? '' : <Footer />} */}
      </Router>
    </div>
  )
}

export default App
