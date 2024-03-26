import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('entered video controler')
    const {useCase:{getPurchasedSubscriptions_useCase}} = dependencies
    const getPurchasedSubscriptions = async (req:Request,res:Response)=>{
        try {
            const {userId,trainerId} = req.body
            const {executeFunction} = await getPurchasedSubscriptions_useCase(dependencies)
            const pruchasedSubscriptions = await executeFunction(userId,trainerId)
            if(!pruchasedSubscriptions){
                res.json({message:'No subscriptions'})

            }else{

                res.status(200).json({message:'success',pruchasedSubscriptions:pruchasedSubscriptions})
            }
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getPurchasedSubscriptions

}