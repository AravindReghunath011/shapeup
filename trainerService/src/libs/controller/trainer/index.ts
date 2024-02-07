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

        

    }
}