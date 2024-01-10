import { Route,Routes } from "react-router-dom"
import Home from "../pages/users/Home"
import Login from "../pages/users/Login"
import Register from "../pages/users/Register"
import Otp from "../pages/users/Otp"

const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
    </Routes>
  )
}

export default UserRoutes