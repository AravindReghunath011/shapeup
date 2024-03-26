import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getSubscriptionList_useCase}} = dependencies
    const getSubscriptionList = async (req:Request,res:Response)=>{
        try {
            const userId = req.params.userId
            
            const {executeFunction} = getSubscriptionList_useCase(dependencies)
            let result = await executeFunction(userId)
            console.log(result,'result')
            res.json({data:result,message:'success'})
           
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getSubscriptionList

}