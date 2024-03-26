import {dietData} from '../../utils/interfaces/dietData'

export const dietUpload_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in videoUpload')
    const executeFunction = async(data:dietData)=>{
        const trainerData = await trainerRepository.dietUpload(data)
        return trainerData
    }
    return {executeFunction}
}