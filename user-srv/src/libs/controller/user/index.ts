import getAllUsersController from "./getAllUsersController";
import addUserController from "./addUserController";
import getUserByEmailController from "./getUserByEmailController";
import loginController from "./loginController";
import googleLoginController from "./googleLoginController";
import otpVerifyController from "./otpVerifyController";
import trainersListController from "./trainersListController";
import resendOtpController from "./resendOtpController";
import getSubscribersListController from "./getSubscribersListController";
import refreshTokenController from "./refreshTokenController";

export default (dependencies:any)=>{
    return {
        getAllUsersController:getAllUsersController(dependencies),
        addUserController:addUserController(dependencies),
        getUserByEmailController:getUserByEmailController(dependencies),
        loginController:loginController(dependencies),
        googleLoginController:googleLoginController(dependencies),
        otpVerifyController:otpVerifyController(dependencies),
        trainersListController:trainersListController(dependencies),
        resendOtpController:resendOtpController(dependencies),
        getSubscribersListController:getSubscribersListController(dependencies),
        refreshTokenController:refreshTokenController(dependencies),
    }
}