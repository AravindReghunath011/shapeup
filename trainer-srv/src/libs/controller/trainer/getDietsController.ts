import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('entered video controler')
    const {useCase:{getDiets_useCase}} = dependencies
    const getDiets = async (req:Request,res:Response)=>{
        try {
            
            const {executeFunction} = await getDiets_useCase(dependencies)
            const diets = await executeFunction()
            if(!diets)res.json({message:'No Diets'})
            res.status(200).json({message:'success',diets:diets})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getDiets

}