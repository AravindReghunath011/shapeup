import {Request,Response} from 'express'
import {verifyLogin,createAccessToken} from '../../utils/reuseFunctions/'


export default  (dependencies:any)=>{
    const {useCase:{verifyOtp_useCase}} = dependencies
    const {repository:{userRepository:{getUserByEmail}}} = dependencies
    const loginUser = async(req:Request,res:Response)=>{
        try {
            const {executeFunction} = verifyOtp_useCase(dependencies)
            const {otp} = req.body
            let user = req.session.user
            console.log(user,req.session.otp,'from session ')
            let otpFromSession = req.session.otp
            let newUser = await executeFunction(user,otp,otpFromSession)
            console.log(newUser,'new user form controller')
            res.json({user:newUser,message:'success'})
        } catch (error:any) {
            console.log(error.message,'ooooo')
            res.json({message:error.message})
        }
        

    }

    return loginUser
}