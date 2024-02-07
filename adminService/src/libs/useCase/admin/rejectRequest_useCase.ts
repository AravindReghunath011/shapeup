export const rejectRequest_useCase = (dependencies:any) =>{
    const {repository:{adminRepository}}  = dependencies
    if(!adminRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:any)=>{
        const data = adminRepository.rejectTrainerRequest()
        return data
    }
    return {executeFunction}
}