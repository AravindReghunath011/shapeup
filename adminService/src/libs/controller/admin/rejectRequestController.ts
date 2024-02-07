import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{rejectRequest_useCase}} = dependencies
    const rejectRequest = async (req:Request,res:Response)=>{
        try {
              
            const {executeFunction} = await rejectRequest_useCase(dependencies)
            const data = await executeFunction()
            if(!data)res.json({mesaage:'The request is not send'})
            res.status(200).json({messsage:'success'})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return rejectRequest

}