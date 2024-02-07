import getAllUsersController from "./getAllUsersController";
import getAllTrainersController from "./getAllTrainersController";
import getadminByEmailController from "./getAdminByEmailController";
import loginController from "./loginController";
import googleLoginController from "./googleLoginController";
import verifyOtpController from "./verifyOtpController";
import acceptRequestController from "./acceptRequestController";
import rejectRequestController from "./rejectRequestController";
import getTrainersRequestsController from "./getTrainersRequestsController";

export default (dependencies:any)=>{
    return {
        getAllUsersController:getAllUsersController(dependencies),
        getAllTrainersController:getAllTrainersController(dependencies),
        getadminByEmailController:getadminByEmailController(dependencies),
        loginController:loginController(dependencies),
        googleLoginController:googleLoginController(dependencies),
        verifyOtpController:verifyOtpController(dependencies),
        acceptRequestController:acceptRequestController(dependencies),
        rejectRequestController:rejectRequestController(dependencies),
        getTrainersRequestsController:getTrainersRequestsController(dependencies),
    }
}