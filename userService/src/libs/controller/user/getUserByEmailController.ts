import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getUserByEmail}} = dependencies
    const getUser = async (req:Request,res:Response)=>{
        try {
            const email = req.params.email    
            const {executeFunction} = await getUserByEmail(dependencies)
            const userData = await executeFunction(email)
            if(!userData)res.json({status:false})
            res.status(200).json(userData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getUser

}