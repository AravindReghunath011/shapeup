import { subscriptionPlan } from "../../utils/interfaces/subscriptionPlan"

export const subscriptionPlan_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    
    const executeFunction = async(data:subscriptionPlan)=>{
        console.log(data,'from subplan usescsasse')
        const newPlan  = await trainerRepository.newSubscriptionPlan(data)
        return newPlan
    }
    return {executeFunction}
}