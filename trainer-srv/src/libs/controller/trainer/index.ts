import getAllTrainersController from "./getAllTrainerController";
import addTrainerController from "./addTrainerController";
import getTrainerByEmailController from "./getTrainerByEmailController";
import loginController from "./loginController";
import googleLoginController from "./googleLoginController";
import verifyOtpController from "./verifyOtpController";
import subscriptionController from "./subscriptionController";
import subscriptionPlanController from "./subscriptionPlanController";
import getSubcriptionPlanController from "./getSubcriptionPlanController";
import getTrainerByIdController from "./getTrainerByIdController";
import trainerFollowController from "./trainerFollowController";
import trainerUnfollowController from "./trainerUnfollowController";
import getSubscriberController from './getSubscribersList'
import videoUploadController from "./videoUploadController";
import getVideoController from "./getVideoController";
import searchTrainerController from './searchTrainerController'
import trainerBlockController from "./trainerBlockController";
import trainerUnblockController from "./trainerUnblockController";
import getSubscriptionListController from "./getSubscriptionListController"; 
import dietUploadController from "./dietUploadController";
import getDietsController from "./getDietsController";
import getVideoByIdController from "./getVideoByIdController";
import getDietByIdController from "./getDietByIdController";
import getPurchasedSubscriptionsController from "./getPurchasedSubscriptionsController";

export default (dependencies:any)=>{
    return {
        getAllTrainersController:getAllTrainersController(dependencies),
        addTrainerController:addTrainerController(dependencies),
        getTrainerByEmailController:getTrainerByEmailController(dependencies),
        loginController:loginController(dependencies),
        googleLoginController:googleLoginController(dependencies),
        verifyOtpController:verifyOtpController(dependencies),
        subscriptionController:subscriptionController(dependencies),
        subscriptionPlanController:subscriptionPlanController(dependencies),
        getSubcriptionPlanController:getSubcriptionPlanController(dependencies),
        getTrainerByIdController:getTrainerByIdController(dependencies),
        trainerUnfollowController:trainerUnfollowController(dependencies),
        trainerFollowController:trainerFollowController(dependencies),
        getSubscriberController:getSubscriberController(dependencies),
        videoUploadController:videoUploadController(dependencies),
        getVideoController:getVideoController(dependencies),
        searchTrainerController:searchTrainerController(dependencies),
        trainerBlockController:trainerBlockController(dependencies),
        trainerUnblockController:trainerUnblockController(dependencies),
        getSubscriptionListController:getSubscriptionListController(dependencies),
        dietUploadController:dietUploadController(dependencies),
        getDietsController:getDietsController(dependencies),
        getVideoByIdController:getVideoByIdController(dependencies),
        getDietByIdController:getDietByIdController(dependencies),
        getPurchasedSubscriptionsController:getPurchasedSubscriptionsController(dependencies),
        

        

    }
}