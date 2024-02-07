export const getAllTrainers_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        console.log('get trainers usecase')
        const trainerData = await trainerRepository.getAllTrainers()
        console.log(trainerData,'from usecase')
        return trainerData
    }
    return {executeFunction}
}