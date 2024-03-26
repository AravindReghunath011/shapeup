import { Response,Request,NextFunction } from "express"


export const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{
        if(req.session?.admin){
            next()
        }else{
            res.json({message:'Login required'})
        }

}   