import { comparePassword,sendEmail,createAccessToken } from "../../utils/reuseFunctions"

export const trainerLogin_useCase = (dependencies:any) =>{
    try{
        const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async({email,password}:any)=>{
        const {getTrainerByEmail} = trainerRepository
        const trainerExist = await getTrainerByEmail(email)
        if(!trainerExist){
            throw new Error('No User found')
        }else{
            if(trainerExist.password){

                let passwordMatch = await comparePassword(password,trainerExist.password)
                if(!passwordMatch){
                    throw new Error('Wrong password')
                }else{
                    let {name,email} = trainerExist
                    let accessToken = createAccessToken(name,email)
                    console.log(accessToken,'accesstoken')
                    return trainerExist
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