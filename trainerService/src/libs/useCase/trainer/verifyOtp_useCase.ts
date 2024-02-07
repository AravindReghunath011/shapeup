import { trainerData } from "../../entities"

export const verifyOtp_useCase = (dependencies:any) =>{
    try{
        const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(trainerData:trainerData)=>{
        const data = {
            name:trainerData.name,
            email:trainerData.email,
            password:trainerData.password,
            followers:0,
            posts:0,
            videos:0,
            profile:null,
            isBlocked:false
        }
        let newTrainer = trainerRepository.createTrainer(data)
        console.log(newTrainer,'newTrainer usecase')
        return newTrainer
    
    }
    return {executeFunction}
}catch(err:any){
    throw new Error(err.message)
        console.log(err)
    } 
    
}
