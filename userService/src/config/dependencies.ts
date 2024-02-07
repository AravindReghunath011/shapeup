import { userRepository } from "../libs/app/repository/index";
import { getAllUsers_useCase,resendOtp_useCase,trainersList_useCase,verifyOtp_useCase,addUser_useCase,getUserByEmail_useCase,userLogin_useCase ,googleLogin_useCase} from "../libs/useCase";

const useCase:any={
    getAllUsers_useCase,
    addUser_useCase,
    getUserByEmail_useCase,
    userLogin_useCase,
    googleLogin_useCase,
    verifyOtp_useCase,
    trainersList_useCase,
    resendOtp_useCase
    
}

const repository:any = {
    userRepository
} 

export default {useCase,repository}