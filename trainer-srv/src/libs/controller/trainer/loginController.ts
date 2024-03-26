import {Request,Response} from 'express'
import {verifyLogin,createAccessToken} from '../../utils/reuseFunctions'


export default  (dependencies:any)=>{
    const {useCase:{trainerLogin_useCase,createAccessToken_useCase}} = dependencies
    const {repository:{trainerRepository:{getTrainerByEmail}}} = dependencies
    const loginTrainer = async(req:Request,res:Response)=>{
        try {
            const {email,password} = req.body
        const verified = verifyLogin({email,password})
        if(verified){
            const {executeFunction} = trainerLogin_useCase(dependencies)
            let trainer = await executeFunction({email,password})
            req.session.trainer = trainer
            console.log(req.session.trainer,'session')
            let accessToken = createAccessToken(trainer.name,trainer.email)
            console.log(accessToken,'logincont')
            res.json({message:'success',trainer:trainer,accessToken:accessToken}) 
        }else{
            throw new Error('Check your credentials')
        }
        } catch (error:any) {
            console.log(error.message,'ooooo')
            res.json({message:error.message})
        }
        

    }

    return loginTrainer
}