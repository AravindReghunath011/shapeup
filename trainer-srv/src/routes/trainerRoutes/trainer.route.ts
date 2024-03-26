import { profileController } from "../../libs/controller";
import express from 'express'
import { uploadImage } from "../../libs/utils/s3/s3";
import { uploadMedia } from "../../libs/utils/s3/s3Video";
import { authMiddleware } from "../../libs/utils/middlewares/authMiddleware";



export default (dependencies:any)=>{
    const router = express.Router()
    const {getAllTrainersController,getDietByIdController,getSubscriberController,getPurchasedSubscriptionsController,trainerUnblockController,getVideoByIdController,getDietsController,dietUploadController,getSubscriptionListController,trainerBlockController,searchTrainerController,getVideoController,trainerFollowController,videoUploadController,trainerUnfollowController,getTrainerByIdController,getSubcriptionPlanController,subscriptionPlanController,subscriptionController,addTrainerController,loginController,getTrainerByEmailController,googleLoginController,verifyOtpController} = profileController(dependencies)
    router.get('/trainers',getAllTrainersController)
    router.post('/register',uploadImage.single('file'),addTrainerController)
    router.get('/videos',getVideoController)
    router.get('/diets',getDietsController)
    router.get('/diet/:id',getDietByIdController)
    router.get('/search',searchTrainerController)
    router.get('/findbyid/:id',getTrainerByIdController)
    router.post('/login',loginController)
    router.get('/getsubscribers/:trainerId',getSubscriberController)
    router.get('/getsubscribedtrainers/:userId',getSubscriptionListController)
    router.post('/getpurchasedsubscription',getPurchasedSubscriptionsController)
    router.post('/blocktrainer',trainerBlockController)
    router.post('/unblocktrainer',trainerUnblockController)
    router.post('/verify',verifyOtpController)
    router.post('/google',googleLoginController)
    router.post('/subscribe',subscriptionController)
    router.post('/video/upload',authMiddleware,uploadMedia.single('file'),videoUploadController)
    router.get('/video/:id',getVideoByIdController)
    router.post('/diet/upload',authMiddleware,uploadImage.single('file'),dietUploadController)
    router.post('/subscriptionPlan',subscriptionPlanController)
    router.get('/getsubscription/:trainerId',getSubcriptionPlanController)
    router.put('/follow/:id',trainerFollowController)
    router.put('/unfollow/:id',trainerUnfollowController)
    router.get('/sample',authMiddleware,()=>console.log('hey there'))
    // router.post('/profileupdate',profileUpdateController)
    // router.get('/:email',getTrainerByEmailController)


    return router
}