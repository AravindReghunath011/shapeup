

export const getAllUsers_useCase = (dependencies:any)=>{
    const {repository:{adminRepository}} = dependencies
    if(!adminRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        const usersData = await adminRepository.getAllUsers()
        return {usersData}
    }
    return {executeFunction}
}