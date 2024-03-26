

export const trainerUnblock_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async(trainerId:string)=>{
        console.log(trainerId,'from trainerunblock usescsasse')
        const trainerData  = await trainerRepository.unBlockTrainer(trainerId)
        return trainerData
    }
    return {executeFunction}
}