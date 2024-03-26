export const getVideos_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:any)=>{
        const videos = trainerRepository.getVideos()
        return videos
    }
    return {executeFunction}
}