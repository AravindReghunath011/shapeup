import {Request,Response} from 'express'


export default  (dependencies:any)=>{
    const {useCase:{subscription_useCase}} = dependencies
    const {repository:{trainerRepository:{gettrainerByEmail}}} = dependencies
    const subscription = async(req:Request,res:Response)=>{
       try {
        console.log(req.body,'from subscribe')
            const {executeFunction} = subscription_useCase(dependencies)
            let newSub = await executeFunction(req.body.data)
            console.log(newSub,'from controller')
            res.json({message:'success'})


       } catch (error:any) {
        res.json({message:error.message})
       }
        
    }

    return subscription
}