export const getDiets_useCase = (dependencies:any) =>{
    const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async()=>{
        const diets = trainerRepository.getDiets()
        return diets
    }
    return {executeFunction}
}