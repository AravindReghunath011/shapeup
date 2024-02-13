export const googleLogin_useCase = (dependencies:any) =>{
    const {repository:{userRepository}}  = dependencies
    if(!userRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(user:any)=>{
        const {getUserByEmail,createUser} = userRepository
        let userExist = await getUserByEmail(user.email)
        if(userExist){
            
            return userExist
        }else{
            const {email,name,picture} = user;
            let newUser = await createUser({email,name,profile:picture,password:null})
            console.log(newUser,'new user google')
            return newUser
        }
    }
    return {executeFunction}
}