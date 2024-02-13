import { Route,Routes } from "react-router-dom"
import Home from "../pages/users/Home"
import Login from "../pages/users/Login"
import Register from "../pages/users/Register"
import Otp from "../pages/users/Otp"
import Trainers from "@/pages/users/Trainers"
import DemoPage from "@/components/ui/page"
import SubscriptionPlan from "@/pages/users/SubscriptionPlan"
import TrainerDetails from "@/pages/users/TrainerDetails"
const UserRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/otp" element={<Otp/>}/>
        <Route path="/trainers" element={<Trainers/>}/>
        <Route path="/subscriptionplan/:trainerId" element={<SubscriptionPlan/>}/>
        <Route path="/trainerdetails/:id" element={<TrainerDetails/>}/>
        <Route path="/table" element={<DemoPage/>}/>
    </Routes>
  )
}

export default UserRoutes