import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getSubscribers_useCase}} = dependencies
    const getUser = async (req:Request,res:Response)=>{
        try {
            console.log('entereeeeddd')
            const trainerId = req.params.trainerId    
            const {executeFunction} = await getSubscribers_useCase(dependencies)
            const userData = await executeFunction(trainerId)
            if(!userData)res.json({status:false})
            res.status(200).json(userData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getUser

}