import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('entered get t by id')
    const {useCase:{getTrainerById_useCase}} = dependencies
    const gettrainer = async (req:Request,res:Response)=>{
        try {
            const id = req.params.id    
            const {executeFunction} = await getTrainerById_useCase(dependencies)
            const trainerData = await executeFunction(id)
            if(!trainerData)res.json({status:false})
            res.status(200).json(trainerData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return gettrainer

}