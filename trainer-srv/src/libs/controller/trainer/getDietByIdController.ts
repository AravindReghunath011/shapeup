import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('entered get diet by id')
    const {useCase:{getDietById_useCase}} = dependencies
    const getDiet = async (req:Request,res:Response)=>{
        try {
            const id = req.params.id    
            const {executeFunction} = await getDietById_useCase(dependencies)
            const dietData = await executeFunction(id)
            if(!dietData)res.json({status:false})
            res.status(200).json(dietData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getDiet

}