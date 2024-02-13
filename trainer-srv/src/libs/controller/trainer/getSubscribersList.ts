import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getSubscribers_useCase}} = dependencies
    const getSubscribers = async (req:Request,res:Response)=>{
        try {
            const trainerId = req.params.trainerId
            
            const {executeFunction} = getSubscribers_useCase(dependencies)
            let result = await executeFunction(trainerId)
            console.log(result,'result')
            res.json({data:result,message:'success'})
           
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getSubscribers

}