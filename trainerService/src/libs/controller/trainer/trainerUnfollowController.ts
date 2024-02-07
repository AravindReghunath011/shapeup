import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{unFollowTrainer_useCase}} = dependencies
    const unFollowTrainer = async (req:Request,res:Response)=>{
        try {
              const trainerId = req.params.id
              const userId = req.body.userId
            const {executeFunction} = await unFollowTrainer_useCase(dependencies)
            const trainerData = await executeFunction(trainerId,userId)
            if(!trainerData)res.json({status:false})
            res.status(200).json({message:'success',data:trainerData})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return unFollowTrainer

}