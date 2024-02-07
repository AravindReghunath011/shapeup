import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getadminByEmail}} = dependencies
    const getadmin = async (req:Request,res:Response)=>{
        try {
            const email = req.params.email    
            const {executeFunction} = await getadminByEmail(dependencies)
            const adminData = await executeFunction(email)
            if(!adminData)res.json({status:false})
            res.status(200).json(adminData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getadmin

}