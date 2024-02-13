import mongoose,{ObjectId,Types} from 'mongoose'
import {schemas} from '../database/mongoDB'
import { adminConsumer } from '../../../events/consumer';
import { adminProducer } from '../../../events/adminProducer';
import { trainerRequests } from '../database/mongoDB/Schema/trainerRequest.schmea';
import { trainerRequest } from '../../utils/interfaces/trainerReqInterface';
const {admin} = schemas;

export default {
    getAllUsers: async()=>{
        let users = await adminProducer('all users','user','getAllUsers')
        return users
    },
    getAllTrainers: async()=>{
        
        let Trainers =  await adminProducer('all users','trainer','getAllTrainersFromAdmin')
        return Trainers
    },

    getadminByEmail:async(email:string)=>{
        let Admins = await admin.findOne({email:email})
        return Admins
    },
    updateOtp:async(email:string,otp:string)=>{
        console.log(otp)
        let updated = await admin.findOneAndUpdate({email:email},{$set:{otp:otp}})
        console.log(updated,'uuuuuuuuu')
        if(updated){
            return true
        }
        return false
    },
    saveRequest:async(data:trainerRequest)=>{
        let reqData = {
            email:data.email,
            certificate:data.certificate
        }
        console.log(reqData,'ll')
        let newTrainerReq = await trainerRequests.create(data)
        console.log(newTrainerReq,'from repo new req')

    },
    acceptTrainerRequest:async(id:string)=>{
        try {
            let request = await trainerRequests.findById(id)
            if(!request){throw new Error('No  such user request found!')}
            let data = request
            let req = await adminProducer(data,'trainer','acceptedRequest')
            await trainerRequests.findByIdAndDelete(id)
            return true
            
        } catch (error:any) {
            throw new Error(error?.message)
        }
    },
    rejectTrainerRequest:async(id:string)=>{
        try {
            let request = await trainerRequests.findById(id)
            if(!request){throw new Error('No  such user request found!')}
            
            await adminProducer('rejected','trainer','rejectedRequest')
        } catch (error:any) {
            throw new Error(error?.message)
        }
    },
    getTrainersRequests:async()=>{
        let requests  = await trainerRequests.find({})
        console.log(requests,'from repo reqs')
        return requests
    }

}