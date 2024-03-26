import {Request,Response} from 'express'


export default (dependencies:any)=>{
    const {useCase:{dietUpload_useCase}} = dependencies
    const dietupload = async (req:Request,res:Response)=>{
        try {
            console.log('entereseeeddddd')
           
            
            
            console.log(req.file)
            console.log(req.body,'body')
            console.log('entered videoupload')
           

                const data = {
                   title:req.body.title,
                   type:req.body.type,
                   description:req.body.description,
                   trainerId:req.body.trainerId,
                   image:req?.file?.location
                }
            
            const {executeFunction} = await dietUpload_useCase(dependencies)
            const response =await executeFunction(data)
            console.log(response,'from controller')
            if(!response)res.json({status:false})
            res.status(200).json({response:response,message:'success'})
        } catch (error:any) {
            res.json({message:error.message})
        }
    }
    return dietupload

}