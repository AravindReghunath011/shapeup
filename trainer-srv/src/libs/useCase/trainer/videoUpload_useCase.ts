import {videoData} from '../../utils/interfaces/videoData'

export const videoUpload_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in videoUpload')
    const executeFunction = async(data:videoData)=>{
        const trainerData = trainerRepository.videoUpload(data)
        return trainerData
    }
    return {executeFunction}
}