import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getSubscriptionPlan_useCase}} = dependencies
    const getAlltrainers = async (req:Request,res:Response)=>{
        try {
            console.log('entered')
            const trainerId = req.params.trainerId
            
            const {executeFunction} = getSubscriptionPlan_useCase(dependencies)
            let result = await executeFunction(trainerId)
            console.log(result,'result')
            res.json({data:result,message:'success'})
           
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAlltrainers

}