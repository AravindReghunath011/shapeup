import { trainerRepository } from "../libs/app/repository/index";
import { getAllTrainers_useCase,addTrainer_useCase,getTrainerByEmail_useCase,trainerLogin_useCase,verifyOtp_useCase ,googleLogin_useCase} from "../libs/useCase";

const useCase:any={
    getAllTrainers_useCase,
    addTrainer_useCase,
    getTrainerByEmail_useCase,
    trainerLogin_useCase,
    googleLogin_useCase,
    verifyOtp_useCase
    
}

const repository:any = {
    trainerRepository
}

export default {useCase,repository}