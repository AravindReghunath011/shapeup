import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{gettrainerByEmail}} = dependencies
    const gettrainer = async (req:Request,res:Response)=>{
        try {
            const email = req.params.email    
            const {executeFunction} = await gettrainerByEmail(dependencies)
            const trainerData = await executeFunction(email)
            if(!trainerData)res.json({status:false})
            res.status(200).json(trainerData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return gettrainer

}