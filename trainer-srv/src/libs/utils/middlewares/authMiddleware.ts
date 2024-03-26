import { Response,Request,NextFunction } from "express"
import { getTrainerByEmail_useCase } from "../../useCase"
import dependencies from "../../../config/dependencies"


export const authMiddleware = async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const {repository:{trainerRepository}} = dependencies
            let trainer = await trainerRepository.getTrainerByEmail(req.session.trainer?.email)
            console.log(trainer,'jjj')
            console.log(req.session.trainer,'session')
            if(trainer && trainer.isBlocked == false){
                next()
            }else{
                throw new Error('no User')
            }
        } catch (error:any) {
            res.json(error.message)
        }

}   