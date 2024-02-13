import { createAccessToken } from "../../utils/reuseFunctions"

export const googleLogin_useCase = (dependencies:any) =>{
    const {repository:{userRepository}}  = dependencies
    if(!userRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(user:any)=>{
        const {getUserByEmail,createUser} = userRepository
        let User = await getUserByEmail(user.email)
        if(User){
            let accessToken = createAccessToken(User.name,User.email,User._id)
            return {accessToken,User}
        }else{
            const {email,name,picture} = user;
            let User = await createUser({email,name,profile:picture,password:null})
            console.log(User,'new user google')
            let accessToken = createAccessToken(User.name,User.email,User._id)
            return {accessToken,User}
        }
    }
    return {executeFunction}
}