import { trainerRepository } from "../libs/app/repository/index";
import { getAllTrainers_useCase,getSubscribers_useCase,acceptedRequest_useCase,followTrainer_useCase,unFollowTrainer_useCase,getTrainerById_useCase,getSubscriptionPlan_useCase,subscriptionPlan_useCase,subscription_useCase,addTrainer_useCase,getTrainerByEmail_useCase,trainerLogin_useCase,verifyOtp_useCase ,googleLogin_useCase} from "../libs/useCase";

const useCase:any={
    getAllTrainers_useCase,
    addTrainer_useCase,
    getTrainerByEmail_useCase,
    trainerLogin_useCase,
    googleLogin_useCase,
    verifyOtp_useCase,
    subscription_useCase,
    subscriptionPlan_useCase,
    getTrainerById_useCase,
    getSubscriptionPlan_useCase,
    unFollowTrainer_useCase,
    followTrainer_useCase,
    acceptedRequest_useCase,
    getSubscribers_useCase,
    
    
}

const repository:any = {
    trainerRepository
}

export default {useCase,repository}