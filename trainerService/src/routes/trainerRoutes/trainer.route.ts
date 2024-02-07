import { profileController } from "../../libs/controller";
import express from 'express'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })


export default (dependencies:any)=>{
    const router = express.Router()
    const {getAllTrainersController,trainerFollowController,trainerUnfollowController,getTrainerByIdController,getSubcriptionPlanController,subscriptionPlanController,subscriptionController,addTrainerController,loginController,getTrainerByEmailController,googleLoginController,verifyOtpController} = profileController(dependencies)
    router.get('/trainers',getAllTrainersController)
    router.post('/register',upload.single('file'),addTrainerController)
    router.get('/:email',getTrainerByEmailController)
    router.get('/findbyid/:id',getTrainerByIdController)
    router.post('/login',loginController)
    router.post('/verify',verifyOtpController)
    router.post('/google',googleLoginController)
    router.post('/subscribe',subscriptionController)
    router.post('/subscriptionPlan',subscriptionPlanController)
    router.get('/getSubcription/:trainerId',getSubcriptionPlanController)
    router.put('/follow/:id',trainerFollowController)
    router.put('/unfollow/:id',trainerUnfollowController)

    return router
}