import Login from "@/pages/trainer/Login"
import Otp from "@/pages/trainer/Otp"
import Register from "@/pages/trainer/Register"
import CreateSubscriptionPlan from "@/pages/trainer/createSubscriptionPlan"
import Home from "@/pages/trainer/Home"
import SubscribersList from "@/pages/trainer/SubscribersList"
import { Route,Routes } from "react-router-dom"



const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/subscriptionplan/create" element={<CreateSubscriptionPlan/>}/>
        <Route path="/subscribers/:trainerId" element={<SubscribersList/>}/>
        
    </Routes>
  )
}

export default UserRoutes