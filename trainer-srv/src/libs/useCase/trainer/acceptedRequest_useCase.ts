import { trainerData } from "../../entities"

export const acceptedRequest_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(trainerData:trainerData)=>{
        console.log('entered the useCase')
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
        let newTrainer = await trainerRepository.createTrainer(data)
        console.log(newTrainer,'newTrainer usecase')
        return newTrainer
    }
    return {executeFunction}
}