import {Request,Response} from 'express'

export default (dependencies:any)=>{
    console.log('entered video controler')
    const {useCase:{getVideos_useCase}} = dependencies
    const gettrainer = async (req:Request,res:Response)=>{
        try {
            
            const {executeFunction} = await getVideos_useCase(dependencies)
            const videos = await executeFunction()
            if(!videos)res.json({message:'No videos'})
            res.status(200).json({message:'success',videos:videos})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return gettrainer

}