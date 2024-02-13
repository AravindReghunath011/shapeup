export const getTrainerById_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(id:string)=>{
        const trainerData = trainerRepository.getTrainerById(id)
        return trainerData
    }
    return {executeFunction}
}