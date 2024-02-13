import { trainerProducer } from "../../../events/trainerProducer"
import { trainerData } from "../../entities"

export const verifyOtp_useCase = (dependencies:any) =>{
    try{
        const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(trainerData:trainerData)=>{
        try {
            
            await trainerProducer(trainerData,'admin','newTrainer')
        } catch (error:any) {
            throw new Error(error.message)
        }
        
        
        return true
    }
    return {executeFunction}
}catch(err:any){
    console.log(err)
    throw new Error(err.message)
    } 
    
}
