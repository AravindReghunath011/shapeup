import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('entered controller unblock')
    const {useCase:{trainerUnblock_useCase}} = dependencies
    const followTrainer = async (req:Request,res:Response)=>{
        try {
              
              const trainerId = req.body.trainerId
            const {executeFunction} = await trainerUnblock_useCase(dependencies)
            const trainerData = await executeFunction(trainerId)
            if(!trainerData)res.json({status:false})
            res.status(200).json({message:'success',data:trainerData})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return followTrainer

}