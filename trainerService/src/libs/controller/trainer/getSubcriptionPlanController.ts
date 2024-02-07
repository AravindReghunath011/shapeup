import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getSubscriptionPlan_useCase}} = dependencies
    const getAlltrainers = async (req:Request,res:Response)=>{
        try {
            const trainerId = req.params.trainerId
            const result=await getSubscriptionPlan_useCase.execute(trainerId)
            res.json()
           
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAlltrainers

}