import { comparePassword,sendEmail,createAccessToken } from "../../utils/reuseFunctions"

export const userLogin_useCase = (dependencies:any) =>{
    try{
        const {repository:{userRepository}}  = dependencies
    if(!userRepository) throw new Error('repo error in getEmail')
    const executeFunction = async({email,password}:any)=>{
        const {getUserByEmail} = userRepository
        const userExist = await getUserByEmail(email)
        if(!userExist){
            throw new Error('No User found')
        }else{
            if(userExist.password){

                let passwordMatch = await comparePassword(password,userExist.password)
                if(!passwordMatch){
                    throw new Error('Wrong password')
                }else{
                    let {name,email} = userExist
                    let accessToken = createAccessToken(name,email)
                    console.log(accessToken,'accesstoken')
                    return userExist
                } 
            }else{
                throw new Error('Wrong credentials')
            }
        }
    } 
    return {executeFunction}
    }catch(error:any){
        throw new Error(error.message)
    }
    
}