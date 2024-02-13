export const getSubscriptionPlan_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async(trainerId:string)=>{
        const plans = await trainerRepository.getSubscriptionPlan(trainerId)
        console.log(plans,'planss')
        return plans
    }
    return {executeFunction}
}