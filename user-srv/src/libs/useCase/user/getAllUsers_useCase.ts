export const getAllUsers_useCase = (dependencies:any)=>{
    const {repository:{userRepository}} = dependencies
    if(!userRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        const userData = await userRepository.getAllUsers()
        return userData
    }
    return {executeFunction}
}