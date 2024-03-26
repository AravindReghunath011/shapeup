import {Request,Response} from 'express'
import multers3 from 'multer-s3'
import { uploadMedia } from '../../utils/s3/s3Video'

export default (dependencies:any)=>{
    const {useCase:{videoUpload_useCase}} = dependencies
    const videoupload = async (req:Request,res:Response)=>{
        try {
            console.log('entereseeeddddd')
           
            
            
            console.log(req.file)
            console.log(req.body,'body')
            console.log('entered videoupload')
           

                const data = {
                   title:req.body.title,
                   bodypart:req.body.bodypart,
                   description:req.body.description,
                   trainerId:req.body.trainerId,
                   video:req?.file?.location
                }
            
            const {executeFunction} = await videoUpload_useCase(dependencies)
            const response =await executeFunction(data)
            console.log(response,'from controller')
            if(!response)res.json({status:false})
            res.status(200).json({response:response,message:'success'})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return videoupload

}