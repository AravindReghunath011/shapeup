import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getAllTrainers_useCase}} = dependencies
    const getAllTrainers = async (req:Request,res:Response)=>{
        try {
            const adminData = await getAllTrainers_useCase(dependencies).executeFunction()
            if(!adminData)res.json({status:false})
            res.status(200).json(adminData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAllTrainers

}