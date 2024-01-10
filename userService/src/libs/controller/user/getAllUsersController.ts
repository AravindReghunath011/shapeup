import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getAllUsers_useCase}} = dependencies
    const getAllUsers = async (req:Request,res:Response)=>{
        try {
            const userData = await getAllUsers_useCase(dependencies).executeFunction()
            if(!userData)res.json({status:false})
            res.status(200).json(userData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAllUsers

}