import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{searchTrainers_useCase}} = dependencies
    const searchTrainer = async (req:Request,res:Response)=>{
        try {
            const searchValue = req.query.value
            console.log(req.query,'quyeyey')
            console.log(searchValue,'valeeuee')
            const {executeFunction} = searchTrainers_useCase(dependencies)
            let result = await executeFunction(searchValue)
            console.log(result,'result')
            res.json({data:result,message:'success'})
        } catch (error:any){
            res.json({message:error.message})
        }
    }
    return searchTrainer

}