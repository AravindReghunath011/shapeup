import { trainerProfile, trainerData } from "../../entities"

export const addTrainer_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    const executeFunction = async({name,email,password}:trainerData)=>{
            let data = {
                name,
                email,
                password,
                followers:[],
                posts:[],
                videos:[],
                profile:null,
                isBlocked:false,
                isVerified:false


            }
            const trainer:object = new trainerProfile(data)
            const trainerData = await trainerRepository.createTrainer(trainer)
            return {trainerData}
    }
    return {executeFunction}
}   