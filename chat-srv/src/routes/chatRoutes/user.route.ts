// import { profileController } from "../../libs/controller";
// import express from 'express'

// export default (dependencies:any)=>{
//     const router = express.Router()
//     const {getAllUsersController,resendOtpController,trainersListController,addUserController,otpVerifyController,loginController,getUserByEmailController,googleLoginController} = profileController(dependencies)
//     router.get('/users',getAllUsersController)
//     router.get('/trainers',trainersListController)
//     router.post('/register',addUserController)
//     router.get('/:email',getUserByEmailController)
//     router.post('/login',loginController)
//     router.post('/verifyotp',otpVerifyController)
//     router.post('/google',googleLoginController)
//     router.post('/resendotp',resendOtpController)

//     return router
// }