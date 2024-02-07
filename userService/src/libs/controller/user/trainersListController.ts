import {Request,Response} from 'express'


export default  (dependencies:any)=>{
    const {useCase:{trainersList_useCase}} = dependencies
    const trainers = async(req:Request,res:Response)=>{
        try {
            console.log('enters trainerslist controller')
            const {executeFunction} = trainersList_useCase(dependencies)
            await executeFunction()
        } catch (error:any) {
            console.log(error.message,'ooooo')
            res.json({message:error.message})
        }
        

    }

    return trainers
}