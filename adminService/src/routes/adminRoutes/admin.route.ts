import { profileController } from "../../libs/controller";
import express from 'express'

export default (dependencies:any)=>{
    const router = express.Router()
    const {getAlladminsController,loginController,getadminByEmailController,googleLoginController,verifyOtpController} = profileController(dependencies)
    router.get('/allUsers',getAlladminsController)
    router.get('/:email',getadminByEmailController)
    router.post('/login',loginController)
    router.post('/verify',verifyOtpController)
    router.post('/google',googleLoginController)

    return router
}