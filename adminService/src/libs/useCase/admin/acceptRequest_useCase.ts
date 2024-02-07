export const acceptRequest_useCase = (dependencies:any) =>{
    const {repository:{adminRepository}}  = dependencies
    if(!adminRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(requestId:any)=>{
        const data = adminRepository.acceptTrainerRequest(requestId)
        return data
    }
    return {executeFunction}
}