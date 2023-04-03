import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Profile from "./pages/client/Profile"
import Store from "./pages/stor/Store"

import ErrorPage from './pages/error/ErrorPage'

function App() {

  return (
    <div className="App font-body">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/store" element={<Store />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  )
}

export default App
