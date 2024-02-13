import {Request,Response} from 'express'
import {SessionData} from '../../utils/reuseFunctions/customSession'


export default  (dependencies:any)=>{ 
    const {useCase:{verifyOtp_useCase}} = dependencies
    const verifyTrainer = async(req:Request,res:Response)=>{
        try {
            console.log('verify otp controller')
            let otp = req.session.otp
            
            let trainerData = req.session.trainer
            console.log(otp,trainerData,'kkkk')
        if(!otp)throw new Error('no otp found')
        console.log(req.body,'req body')
            console.log(req.body.otp,'otppppp')
            if(otp==req.body.otp){
                console.log('entered')
                const {executeFunction} = verifyOtp_useCase(dependencies)
                let verified = await executeFunction(trainerData)
                console.log(verified,'veeee')
                if(verified){
                    console.log('otp verified')
                    res.json({message:'success'})
                } 
            }
        } catch (error:any) {
            res.json({message:error.message})
        }
        
    }
    return verifyTrainer
}