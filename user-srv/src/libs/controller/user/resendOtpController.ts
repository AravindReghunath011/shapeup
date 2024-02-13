import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{resendOtp_useCase}} = dependencies
    const getAllUsers = async (req:Request,res:Response)=>{
        try {
            const user = req.session.user
            console.log(user,'from sesion in resend')
            const {email} = user as {email:string} 
            console.log(email,'email from resend')
            const userData = await resendOtp_useCase(dependencies).executeFunction(email)
            if(!userData)res.json({status:false})
            res.status(200).json({message:'resendotp'})
        } catch (error:any) {
            console.log('Error in Get resend OTP', error);
            res.json({message:error.message})
        } 
    }
    return getAllUsers

} 