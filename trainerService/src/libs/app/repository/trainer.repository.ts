import mongoose,{ObjectId,Types} from 'mongoose'
import {schemas} from '../database/mongoDB'
const {trainer} = schemas;

export default {
    createTrainer: async(data:any)=>{
        const userData = {
            name:data.name,
            email:data.email,
            password:data.password,
            followers:data.following,
            posts:data.posts,
            videos:data.videos,
            profile:data.profile,
            isBlocked:data.isBlocked
        }

        console.log(userData)
        const Trainers =  await trainer.create(userData)
        console.log(Trainers,'repo')
        return Trainers
    },

    getAllTrainers: async()=>{
        let Trainers = await trainer.find({})
        return Trainers
    },

    getTrainerByEmail:async(email:string)=>{
        let Trainers = await trainer.findOne({email:email})
        return Trainers
    },
    updateOtp:async(email:string,otp:string)=>{
        console.log(otp)
        let updated = await trainer.findOneAndUpdate({email:email},{$set:{otp:otp}})
        console.log(updated,'uuuuuuuuu')
        if(updated){
            return true
        }
        return false
    },
    
}