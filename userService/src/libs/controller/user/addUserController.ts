import {Request,Response} from 'express'
import {hashPassword,comparePassword} from '../../utils/reuseFunctions/bcrypt'
import {verifyRegisterData} from '../../utils/reuseFunctions/registerValidation'
import { sendEmail } from '../../utils/reuseFunctions'


export default  (dependencies:any)=>{ 
    const {useCase:{addUser_useCase}} = dependencies
    const {repository:{userRepository:{getUserByEmail}}} = dependencies
    const addUser = async(req:Request,res:Response)=>{
        console.log(req.body,'reqbody')
        const {name,email,password} = req.body
        try {
            let userExist = await getUserByEmail(email)
            console.log(userExist,'uXist')
            if(!userExist){
                verifyRegisterData(req.body).then(async()=>{

                    let securePass = await hashPassword(password)
        
                    const {executeFunction} = await addUser_useCase(dependencies)
                    console.log(securePass,'secu')
                    const user = await executeFunction({name,email,password:securePass})
                    if(!user){
                        throw new Error('No User ')
                    }
                    console.log(user,'user')
                    let otp = await sendEmail(email) 
                    
                    res.status(200).json({otp:otp,message:'Verify your email'})
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

