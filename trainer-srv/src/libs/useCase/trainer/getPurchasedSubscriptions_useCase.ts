export const getPurchasedSubscriptions_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(userId:string,trainerId:string)=>{
        const pruchasedSubscriptions = trainerRepository.getPurchasedSubscriptions(userId,trainerId)
        return pruchasedSubscriptions
    }
    return {executeFunction}
}