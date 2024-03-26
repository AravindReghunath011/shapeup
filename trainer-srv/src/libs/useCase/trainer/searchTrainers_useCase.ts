export const searchTrainers_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(value:string)=>{
        console.log('entered exec')
        const trainerData = trainerRepository.search(value)
        return trainerData
    }
    return {executeFunction}
}