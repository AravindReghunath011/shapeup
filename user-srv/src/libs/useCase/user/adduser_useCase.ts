import { userData, userProfile } from "../../entities"

export const addUser_useCase = (dependencies:any)=>{
    const {repository:{userRepository}} = dependencies
    if(!userRepository) throw new Error('repo error')
    const executeFunction = async({name,email,password}:userData)=>{
        try {
            
            await userRepository.sendEmail(email)
        } catch (error) {
            throw new Error('Error while registering')
        }
    }
    return {executeFunction}
}   