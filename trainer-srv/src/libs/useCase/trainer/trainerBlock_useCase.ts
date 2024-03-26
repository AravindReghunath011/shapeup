

export const trainerBlock_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async(trainerId:string)=>{
        console.log(trainerId,'from trainerBlock usescsasse')
        const trainerData  = await trainerRepository.blockTrainer(trainerId)
        return trainerData
    }
    return {executeFunction}
}