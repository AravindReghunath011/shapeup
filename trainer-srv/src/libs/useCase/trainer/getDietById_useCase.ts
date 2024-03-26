export const getDietById_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(id:string)=>{
        const videoData = trainerRepository.getDietById(id)
        return videoData
    }
    return {executeFunction}
}