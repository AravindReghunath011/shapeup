import { userData, userProfile } from "../../entities"

export const addUser_useCase = (dependencies:any)=>{
    const {repository:{userRepository}} = dependencies
    if(!userRepository) throw new Error('repo error')
    const executeFunction = async({name,email,password}:userData)=>{
            let data = {
                name,
                email,
                password,
                following:[],
                profile:null,
                isBlocked:false,
                isVerified:false


            }
            const user:object = new userProfile(data)
            const userData = await userRepository.createUser(user)
            return {userData}
    }
    return {executeFunction}
}   