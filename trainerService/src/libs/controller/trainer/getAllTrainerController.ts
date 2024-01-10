import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getAlltrainers_useCase}} = dependencies
    const getAlltrainers = async (req:Request,res:Response)=>{
        try {
            const trainerData = await getAlltrainers_useCase(dependencies).executeFunction()
            if(!trainerData)res.json({status:false})
            res.status(200).json(trainerData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAlltrainers

}