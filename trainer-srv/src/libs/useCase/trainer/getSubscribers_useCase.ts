export const getSubscribers_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async(trainerId:string)=>{
        console.log('get trainers usecase')
        const subscribers = await trainerRepository.getSubscribers(trainerId)
        console.log(subscribers,'from usecase')
        return subscribers
    }
    return {executeFunction}
}