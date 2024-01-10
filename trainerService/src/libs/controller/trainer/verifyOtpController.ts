import {Request,Response} from 'express'

export default  (dependencies:any)=>{ 
    const {useCase:{verifyOtp_useCase}} = dependencies
    const verifyTrainer = async(req:Request,res:Response)=>{
        try {
            let {email,otp} = req.body
        if(!otp)throw new Error('no otp found')
        console.log(req.body,'req body')
        const {executeFunction} = verifyOtp_useCase(dependencies)
        let verified = await executeFunction(email,otp)
        if(verified){
            res.json({message:'verify success'})
        } 
        } catch (error:any) {
            res.json({message:error.message})
        }
        
    }
    return verifyTrainer
}