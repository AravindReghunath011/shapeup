import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('heloooo')
    const {useCase:{getTrainersRequest_useCase}} = dependencies
    const getAllTrainers = async (req:Request,res:Response)=>{
        try {
            const requests = await getTrainersRequest_useCase(dependencies).executeFunction()
            console.log(requests,'reqsss from controllers')
            if(!requests)res.json({message:'Error while fetching requests'})
            res.status(200).json(requests)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAllTrainers

}