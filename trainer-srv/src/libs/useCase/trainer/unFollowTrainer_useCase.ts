export const unFollowTrainer_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(trainerId:string,userId:string)=>{
        const trainerData = trainerRepository.unFollowTrainer(trainerId,userId)
        return trainerData
    }
    return {executeFunction}
}