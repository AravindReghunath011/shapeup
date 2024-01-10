import getAlladminsController from "./getAllAdminController";
import getadminByEmailController from "./getAdminByEmailController";
import loginController from "./loginController";
import googleLoginController from "./googleLoginController";
import verifyOtpController from "./verifyOtpController";

export default (dependencies:any)=>{
    return {
        getAlladminsController:getAlladminsController(dependencies),
        getadminByEmailController:getadminByEmailController(dependencies),
        loginController:loginController(dependencies),
        googleLoginController:googleLoginController(dependencies),
        verifyOtpController:verifyOtpController(dependencies)
    }
}