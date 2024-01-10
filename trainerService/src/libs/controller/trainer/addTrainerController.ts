import {Request,Response} from 'express'
import {hashPassword,comparePassword} from '../../utils/reuseFunctions/'
import {verifyRegisterData} from '../../utils/reuseFunctions/'
import { sendEmail } from '../../utils/reuseFunctions'


export default  (dependencies:any)=>{ 
    const {useCase:{addTrainer_useCase}} = dependencies
    const {repository:{trainerRepository:{getTrainerByEmail,updateOtp}}} = dependencies
    const addtrainer = async(req:Request,res:Response)=>{
        console.log(req.body,'reqbody')
        const {name,email,password} = req.body
        try {
            let trainerExist = await getTrainerByEmail(email)
            console.log(trainerExist,'uXist')
            if(!trainerExist){
                verifyRegisterData(req.body).then(async()=>{

                    let securePass = await hashPassword(password)
        
                    const {executeFunction} = await addTrainer_useCase(dependencies)
                    console.log(securePass,'secu')
                    const trainer = await executeFunction({name,email,password:securePass})
                    if(!trainer){
                        throw new Error('No trainer ')
                    }
                    console.log(trainer,'trainer')
                    let otp = await sendEmail(email) 
                    let otpUpdated = await updateOtp(email,otp.otp)
                    if(!otpUpdated)throw new Error('OTP error')
                    res.status(200).json({message:'Verify your email'})
                }).catch((err:any)=>{
                    res.json({message:err.message})
                })
            }else{
                res.json({message:"Email already exists"})
            }
            
        } catch (error:any) {
            console.log(error.message,'ooooo from add trainer')
            res.json({message:error.message})
        }
    }
    return addtrainer
}

