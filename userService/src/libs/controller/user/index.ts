import getAllUsersController from "./getAllUsersController";
import addUserController from "./addUserController";
import getUserByEmailController from "./getUserByEmailController";
import loginController from "./loginController";
import googleLoginController from "./googleLoginController";

export default (dependencies:any)=>{
    return {
        getAllUsersController:getAllUsersController(dependencies),
        addUserController:addUserController(dependencies),
        getUserByEmailController:getUserByEmailController(dependencies),
        loginController:loginController(dependencies),
        googleLoginController:googleLoginController(dependencies)
    }
}