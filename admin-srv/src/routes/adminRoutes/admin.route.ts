import { profileController } from "../../libs/controller";
import express from 'express'

export default (dependencies:any)=>{
    const router = express.Router()
    const {getAllUsersController,getTrainersRequestsController,rejectRequestController,acceptRequestController,getAllTrainersController,loginController,getadminByEmailController,googleLoginController,verifyOtpController} = profileController(dependencies)
    router.get('/users',getAllUsersController)
    router.get('/trainers',getAllTrainersController)
    router.get('/:email',getadminByEmailController)
    router.post('/login',loginController)
    router.post('/verify',verifyOtpController)
    router.post('/google',googleLoginController)
    router.put('/accept',acceptRequestController)
    router.put('/reject',rejectRequestController)
    router.post('/requests',getTrainersRequestsController)


    return router
}