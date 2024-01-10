import {Request,Response} from 'express'


export default  (dependencies:any)=>{
    const {useCase:{googleLogin_useCase}} = dependencies
    const {repository:{trainerRepository:{gettrainerByEmail}}} = dependencies
    const googleLogin = async(req:Request,res:Response)=>{
       try {
            console.log(req.body.trainer,'google trainer')
            let {executeFunction} = await googleLogin_useCase(dependencies)
            let trainer = await executeFunction(req.body.trainer)
            console.log(trainer,'after google trainer')
            res.json({message:'success',trainer:trainer})
       } catch (error:any) {
        res.json({message:error.message})
       }
        
    }

    return googleLogin
}