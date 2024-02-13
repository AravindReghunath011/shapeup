import {Request,Response} from 'express'
import {hashPassword,comparePassword} from '../../utils/reuseFunctions/bcrypt'
import {verifyRegisterData} from '../../utils/reuseFunctions/registerValidation'
import { sendEmail,SessionData } from '../../utils/reuseFunctions'



export default  (dependencies:any)=>{ 
    const {useCase:{addUser_useCase}} = dependencies
    const {repository:{userRepository}} = dependencies
    const addUser = async(req:Request,res:Response)=>{
        console.log(req.body,'reqbody')
        const {email} = req.body
        try {
            let userExist = await userRepository.getUserByEmail(email)
            console.log(userExist,'uXist')
            if(!userExist){
                verifyRegisterData(req.body).then(async()=>{

                    let otp = await sendEmail(email) 
                    req.session.otp = otp.toString()
                    let securepass = await hashPassword(req.body.password)
                    let newUser={...req.body , password :securepass}
                    req.session.user = newUser
                    res.status(200).json({message:'Verify your email'})
                }).catch((err:any)=>{
                    res.json({message:err.message})
                })
            }else{
                
                res.json({message:"Email already exists"})
            }
            
        } catch (error:any) {
            console.log(error.message,'ooooo from add user')
            res.json({message:error.message})
        }
    }
    return addUser
}

