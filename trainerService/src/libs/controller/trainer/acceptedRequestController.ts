import {Request,Response} from 'express'

export default (dependencies:any,data:any)=>{
    const {useCase:{acceptedRequest_useCase}} = dependencies
    const acceptedRequest = async (req:Request,res:Response)=>{
        try {
            let response = await acceptedRequest_useCase(dependencies).executeFunction(data)
            const {password,name,email} = req.session.trainer
            console.log(req.session.trainer)
           let securePass = await hashPassword(password)
        
                    const {executeFunction} = await addTrainer_useCase(dependencies)
                    console.log(securePass,'secu')
                    let trainerData = {
                        name : name ,
                        email : email ,
                        password : securePass,
                    }
                    console.log(trainerData,'trainerdata')
                    req.session.trainer = trainerData
                    const otp = await executeFunction(email)
                    req.session.otp = otp
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return acceptedRequest

}