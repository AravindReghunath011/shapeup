import { profileController } from "../../libs/controller";
import express from 'express'

export default (dependencies:any)=>{
    const router = express.Router()
    const {getAllUsersController,addUserController,loginController,getUserByEmailController,googleLoginController} = profileController(dependencies)
    router.get('/allUsers',getAllUsersController)
    router.post('/register',addUserController)
    router.get('/:email',getUserByEmailController)
    router.post('/login',loginController)
    router.post('/google',googleLoginController)

    return router
}