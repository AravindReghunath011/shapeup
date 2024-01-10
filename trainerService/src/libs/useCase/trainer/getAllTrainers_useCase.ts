export const getAllTrainers_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        const trainerData = await trainerRepository.getAllTrainers()
        return {trainerData}
    }
    return {executeFunction}
}