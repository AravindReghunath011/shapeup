import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('okey here we go')
    const {useCase:{acceptRequest_useCase}} = dependencies
    const acceptRequest = async (req:Request,res:Response)=>{
        try {
              
            const {executeFunction} = await acceptRequest_useCase(dependencies)
            const data = await executeFunction(req.body.requestId)
            if(!data)res.json({mesaage:'The request is not send'})
            res.status(200).json({messsage:'success'})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return acceptRequest

}