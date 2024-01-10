export const getadminByEmail_useCase = (dependencies:any) =>{
    const {repository:{adminRepository}}  = dependencies
    if(!adminRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:any)=>{
        const adminData = adminRepository.getadminByEmail(email)
        return adminData
    }
    return {executeFunction}
}