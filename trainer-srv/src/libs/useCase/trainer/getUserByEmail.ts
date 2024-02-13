export const getTrainerByEmail_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:any)=>{
        const trainerData = trainerRepository.getTrainerByEmail(email)
        return trainerData
    }
    return {executeFunction}
}