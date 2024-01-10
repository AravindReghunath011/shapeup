export const getUserByEmail_useCase = (dependencies:any) =>{
    const {repository:{userRepository}}  = dependencies
    if(!userRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:any)=>{
        const userData = userRepository.getUserByEmail(email)
        return userData
    }
    return {executeFunction}
}