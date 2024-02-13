import { trainerProfile, trainerData } from "../../entities"
import { sendEmail } from '../../utils/reuseFunctions'


export const addTrainer_useCase = (dependencies:any)=>{
    const {repository:{trainerRepository}} = dependencies
    if(!trainerRepository) throw new Error('repo error')
    const executeFunction = async(email:string)=>{
           try {
            console.log('add trainer usecase')
            let otp = await sendEmail(email)
            return otp
           } catch (error:any) {
            throw new Error(error.message)
           }
    }
    return {executeFunction}
}   