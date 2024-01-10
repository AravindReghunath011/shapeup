import { profileController } from "../../libs/controller";
import express from 'express'

export default (dependencies:any)=>{
    const router = express.Router()
    const {getAllTrainersController,addTrainerController,loginController,getTrainerByEmailController,googleLoginController,verifyOtpController} = profileController(dependencies)
    router.get('/allUsers',getAllTrainersController)
    router.post('/register',addTrainerController)
    router.get('/:email',getTrainerByEmailController)
    router.post('/login',loginController)
    router.post('/verify',verifyOtpController)
    router.post('/google',googleLoginController)

    return router
}