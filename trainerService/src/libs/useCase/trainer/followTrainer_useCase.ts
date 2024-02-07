export const followTrainer_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(trainerId:string,userId:string)=>{
        console.log('entered exec')
        const trainerData = trainerRepository.followTrainer(trainerId,userId)
        return trainerData
    }
    return {executeFunction}
}