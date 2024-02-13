import {Request,Response} from 'express'

export default (dependencies:any)=>{
    const {useCase:{getAllTrainers_useCase}} = dependencies
    const getAlltrainers = async (req:Request,res:Response)=>{
        console.log(req.session.trainer,'from sessioin')
        req.session.trainer = {
            name:'helo',
            password:'helo',
            email:'heh'
        }
        
        try {
            console.log('entered getalltrainers ')
             
            const {executeFunction} = await getAllTrainers_useCase(dependencies)
            const trainerData =await executeFunction()
            console.log(trainerData,'from controller')
            if(!trainerData)res.json({status:false})
            res.status(200).json({trainers:trainerData,message:'success'})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getAlltrainers

}