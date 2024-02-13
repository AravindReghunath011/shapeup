import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{subscriptionPlan_useCase},} = dependencies
    const subscriptionPlan = async (req:Request,res:Response)=>{
        try {
            console.log('entered subscriptonplan')
             
            const {executeFunction} = await subscriptionPlan_useCase(dependencies)
            const planData =await executeFunction(req.body)
            console.log(planData,'from controller')
            if(!planData)res.json({status:false})
            res.status(200).json({trainers:planData,message:'success'})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return subscriptionPlan

}