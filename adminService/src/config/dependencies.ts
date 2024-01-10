import { adminRepository } from "../libs/app/repository/index";
import { getAlladmins_useCase,addadmin_useCase,getadminByEmail_useCase,adminLogin_useCase,verifyOtp_useCase ,googleLogin_useCase} from "../libs/useCase";

const useCase:any={
    getAlladmins_useCase,
    addadmin_useCase,
    getadminByEmail_useCase,
    adminLogin_useCase,
    googleLogin_useCase,
    verifyOtp_useCase
    
}

const repository:any = {
    adminRepository
}

export default {useCase,repository}