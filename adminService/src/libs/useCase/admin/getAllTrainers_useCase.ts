

export const getAllTrainers_useCase = (dependencies:any)=>{
    const {repository:{adminRepository}} = dependencies
    if(!adminRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        const usersData = await adminRepository.getAllTrainers()
        return {usersData}
    }
    return {executeFunction}
}