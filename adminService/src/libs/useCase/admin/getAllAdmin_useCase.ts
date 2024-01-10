export const getAlladmins_useCase = (dependencies:any)=>{
    const {repository:{adminRepository}} = dependencies
    if(!adminRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        const adminData = await adminRepository.getAlladmins()
        return {adminData}
    }
    return {executeFunction}
}