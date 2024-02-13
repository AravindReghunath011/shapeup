export const verifyOtp_useCase = (dependencies:any) =>{
    const {repository:{userRepository}}  = dependencies
    if(!userRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(user:any,otp:string,otpFromSession:string)=>{
            const {name,email,password} = user
            let data = {
                        name,
                        email,
                        password,
                        following:[],
                        profile:null,
                        isBlocked:false,
                        isVerified:false,
                        subscription:[]
            
            
                        }
            if(otp==otpFromSession){ 
                let newUser = userRepository.createUser(data)
                return newUser
            }
            else{throw new Error("Wrong OTP")}
        
    }
    return {executeFunction}
}