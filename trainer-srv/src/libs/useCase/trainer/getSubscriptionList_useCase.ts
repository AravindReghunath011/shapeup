export const getSubscriptionList_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async(userId:string)=>{
        console.log('get trainers usecase')
        const subscriptionList = await trainerRepository.getSubscriptionList(userId)
        console.log(subscriptionList,'from usecase')
        return subscriptionList
    }
    return {executeFunction}
}