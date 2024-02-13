import { comparePassword,sendEmail,createAccessToken } from "../../utils/reuseFunctions"

export const adminLogin_useCase = (dependencies:any) =>{
    try{
        const {repository:{adminRepository}}  = dependencies
    if(!adminRepository) throw new Error('repo error in getEmail')
    const executeFunction = async({email,password}:any)=>{
        const {getadminByEmail} = adminRepository
        const adminExist = await getadminByEmail(email)
        if(!adminExist){
            throw new Error('No User found')
        }else{
            if(adminExist.password){

                let passwordMatch = await comparePassword(password,adminExist.password)
                if(!passwordMatch){
                    throw new Error('Wrong password')
                }else{
                    let {name,email} = adminExist
                    let accessToken = createAccessToken(name,email)
                    console.log(accessToken,'accesstoken')
                    return adminExist
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