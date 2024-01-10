import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getAlladmins_useCase}} = dependencies
    const getAlladmins = async (req:Request,res:Response)=>{
        try {
            const adminData = await getAlladmins_useCase(dependencies).executeFunction()
            if(!adminData)res.json({status:false})
            res.status(200).json(adminData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAlladmins

}