

export const getTrainersRequest_useCase = (dependencies:any)=>{
    const {repository:{adminRepository}} = dependencies
    if(!adminRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        const data = await adminRepository.getTrainersRequests()
        return {data}
    }
    return {executeFunction}
}