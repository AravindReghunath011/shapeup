import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('entered get t by id')
    const {useCase:{getVideoById_useCase}} = dependencies
    const getVideo = async (req:Request,res:Response)=>{
        try {
            const id = req.params.id    
            const {executeFunction} = await getVideoById_useCase(dependencies)
            const videoData = await executeFunction(id)
            if(!videoData)res.json({status:false})
            res.status(200).json(videoData)
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return getVideo

}