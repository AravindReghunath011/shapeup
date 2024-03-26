import { profileController } from "../../libs/controller";
import express from 'express'
import authMiddlewawre from "../../libs/utils/middlewares/authMiddleware";

export default (dependencies:any)=>{
    const router = express.Router()
    const {refreshTokenController,getAllUsersController,resendOtpController,getSubscribersListController,trainersListController,addUserController,otpVerifyController,loginController,getUserByEmailController,googleLoginController} = profileController(dependencies)
    router.get('/users',getAllUsersController)
    router.get('/trainers',authMiddlewawre,trainersListController)
    router.post('/register',addUserController)
    router.post('/login',loginController)
    router.post('/verifyotp',otpVerifyController)
    router.post('/google',googleLoginController)
    router.post('/resendotp',resendOtpController)
    router.get('/subscribers/:trainerId',getSubscribersListController)
    router.post('/refresh-token' , refreshTokenController)
    router.get('/sample-route' ,authMiddlewawre , (req,res)=>res.json({message:"Success"}))
    router.get('/:email',getUserByEmailController)
    return router
}