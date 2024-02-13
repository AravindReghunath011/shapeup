import {Request,Response} from 'express'
import {hashPassword,comparePassword} from '../../utils/reuseFunctions/'
import {verifyRegisterData} from '../../utils/reuseFunctions/'
import { trainerProducer } from '../../../events/trainerProducer'
import { uploadImageToS3 } from '../../utils/s3/s3uploadImage'


export default  (dependencies:any)=>{ 
    const {useCase:{addTrainer_useCase}} = dependencies
    const {repository:{trainerRepository:{getTrainerByEmail}}} = dependencies
    const addtrainer = async(req:Request,res:Response)=>{
        console.log(req.body,'reqbody ll')
        console.log(req.file,'file ll')
        const {name,email,password} = req.body
        try {
            console.log('error')
            // let result = await uploadImageToS3(req.file,req.file?.filename)
            // console.log(result,'resulttttt')
            let trainerExist = await getTrainerByEmail(email)
            console.log(trainerExist,'uXist')
            if(!trainerExist){
                verifyRegisterData(req.body).then(async()=>{
                    let certificate = req.file?.filename
                    let securePass = await hashPassword(req.body.password)
                    req.session.trainer = {
                        ...req.body,
                        password:securePass,
                        certificate
                    }

                    // res.json({message:'request send to admin'})
                    // let securePass = await hashPassword(password)
                    console.log(req.session.trainer,'from session')
                    const {executeFunction} = await addTrainer_useCase(dependencies)
                    // console.log(securePass,'secu')
                    // let trainerData = {
                    //     name : name ,
                    //     email : email ,
                    //     password : securePass,
                    // }
                    // console.log(trainerData,'trainerdata')
                    // req.session.trainer = trainerData
                    const otp = await executeFunction(email)
                    req.session.otp = otp
                   
                    
                    
                    
                    // console.log('everything success',req.session.otp,req.session.trainer)
                    res.status(200).json({message:'success'})
                }).catch((err:any)=>{
                    console.log('err in add trainer',err.message)
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

