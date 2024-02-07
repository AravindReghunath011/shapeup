import Login from "@/pages/trainer/Login"
import Otp from "@/pages/trainer/Otp"
import Register from "@/pages/trainer/Register"
import SubscriptionPlan from "@/pages/users/SubscriptionPlan"
import CreateSubscriptionPlan from "@/pages/trainer/createSubscriptionPlan"
import { Route,Routes } from "react-router-dom"



const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/subscriptionplan" element={<SubscriptionPlan/>}/>
        <Route path="/subscriptionplan/create" element={<CreateSubscriptionPlan/>}/>
        
    </Routes>
  )
}

export default UserRoutes