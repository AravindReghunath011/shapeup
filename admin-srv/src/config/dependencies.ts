import { adminRepository } from "../libs/app/repository/index";
import { getAllUsers_useCase,rejectRequest_useCase,getTrainersRequest_useCase,acceptRequest_useCase,getAllTrainers_useCase,addadmin_useCase,getadminByEmail_useCase,adminLogin_useCase,verifyOtp_useCase ,googleLogin_useCase} from "../libs/useCase";

const useCase:any={
    getAllUsers_useCase,
    addadmin_useCase,
    getadminByEmail_useCase,
    adminLogin_useCase,
    googleLogin_useCase,
    verifyOtp_useCase,
    getAllTrainers_useCase,
    rejectRequest_useCase,
    acceptRequest_useCase,
    getTrainersRequest_useCase
    
}

const repository:any = {
    adminRepository
}

export default {useCase,repository}