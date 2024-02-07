export const trainersList_useCase = (dependencies:any)=>{
    const {repository:{userRepository}} = dependencies
    if(!userRepository) throw new Error('repo error')
    
    const executeFunction = async()=>{
        console.log('entered usecase trainerslist')
        const trainers = await userRepository.trainersList()
        return {trainers}
    }
    return {executeFunction}
}