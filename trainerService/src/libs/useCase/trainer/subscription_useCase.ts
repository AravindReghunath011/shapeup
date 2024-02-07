export const subscription_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(data:any)=>{
       try {
        console.log(data,'ee')
        let sub = await trainerRepository.newSubscription(data)
        console.log(sub,'from useCase')
        return sub
       } catch (error:any) {
        throw new Error(error.message)
       }
    }
    return {executeFunction}
}