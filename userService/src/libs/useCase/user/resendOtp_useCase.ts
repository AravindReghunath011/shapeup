import { sendEmail,SessionData } from '../../utils/reuseFunctions'


export const resendOtp_useCase = (dependencies:any) =>{
    const {repository:{userRepository}}  = dependencies
    if(!userRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:string)=>{

           try {
            await sendEmail(email)
            return true
           } catch (error: any) {
            if (!(error instanceof TypeError)) {
               throw error;
            }
           } 
        
    }
    return {executeFunction}
}