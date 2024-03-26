export const getSubscribers_useCase = (dependencies:any) =>{
    const {repository:{userRepository}}  = dependencies
    if(!userRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:any)=>{
        const userData = userRepository.getSubscribersList(email)
        return userData
    }
    return {executeFunction}
}