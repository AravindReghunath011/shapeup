import getAllTrainersController from "./getAllTrainerController";
import addTrainerController from "./addTrainerController";
import getTrainerByEmailController from "./getTrainerByEmailController";
import loginController from "./loginController";
import googleLoginController from "./googleLoginController";
import verifyOtpController from "./verifyOtpController";

export default (dependencies:any)=>{
    return {
        getAllTrainersController:getAllTrainersController(dependencies),
        addTrainerController:addTrainerController(dependencies),
        getTrainerByEmailController:getTrainerByEmailController(dependencies),
        loginController:loginController(dependencies),
        googleLoginController:googleLoginController(dependencies),
        verifyOtpController:verifyOtpController(dependencies)
    }
}