import mongoose,{ObjectId,Types} from 'mongoose'
import {schemas} from '../database/mongoDB'
import { trainerProducer } from '../../../events/trainerProducer';
import { subscriptionPlan } from '../../utils/interfaces/subscriptionPlan';
const {trainer,subscription,subscriptionPlan} = schemas;

export default {
    createTrainer: async(data:any)=>{
        const userData = {
            name:data.name,
            email:data.email,
            password:data.password,
            followers:data.following,
            certificate:data.certificate,
            videos:data.videos,
            profile:data.profile,
            isBlocked:data.isBlocked
        }

        console.log(userData)
        const Trainers =  await trainer.create(userData)
        console.log(Trainers,'repo')
        return Trainers
    },

    getAllTrainers: async(from:string)=>{
        let Trainers = await trainer.find({})
        console.log(Trainers,'from getalltrainers')
        if(from=='user'){

            await trainerProducer(Trainers,'user','returnTrainers')
        }
        if(from=='admin'){

            await trainerProducer(Trainers,'admin','returnTrainers')
        }
        return Trainers
    },

    getAllTrainersFromUser: async()=>{
        let Trainers = await trainer.find({})
        console.log(Trainers,'from getalltrainers')
        await trainerProducer(Trainers,'returnTrainersToUser','returnTrainersToUser')
        return Trainers
    },

    getTrainerByEmail:async(email:string)=>{
        let Trainers = await trainer.findOne({email:email})
        return Trainers
    },
    getTrainerById:async(id:string)=>{
        let Trainers = await trainer.findOne({_id:id})
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
    newSubscription:async(data:any)=>{
        console.log(data)
        let newSub = await subscription.create(data)

        return newSub
    },
    getSubscriptionPlan:async(trainerId:string)=>{
        let plans = subscriptionPlan.findOne({trainerId:trainerId})
        return plans
    },
    newSubscriptionPlan:async(data:subscriptionPlan)=>{
        const newPlan = await subscriptionPlan.create(data)
        console.log(newPlan,"plan created")
        return newPlan
    },
    followTrainer:async(trainerId:string,userId:string)=>{
        const Trainer = trainer.findById(trainerId)
        if(!Trainer){
            throw new Error ('Invalid Trainer Id')
        }else{
            let updatedTrainer = await trainer.findByIdAndUpdate(trainerId,{$push:{followers:userId}},{new:true})
            await trainerProducer({trainerId:trainerId,userId:userId},'user','newfollow')
            console.log(updatedTrainer,'updated')
            return updatedTrainer
        }

    },
    unFollowTrainer:async(trainerId:string,userId:string)=>{
        const triner = trainer.findById(trainerId)
        if(!trainer){
            throw new Error ('Invalid Trainer Id')
        }else{
            let updatedTrainer = trainer.findByIdAndUpdate(trainerId,{$pull:{followers:userId}})
            await trainerProducer({trainerId:trainerId,userId:userId},'user','newfollow')
            return updatedTrainer
        }

    },
    getSubscribers:async(trainerId:string)=>{
        const subscribers = await subscription.find({trainerId:trainerId})
        console.log(subscribers,'from repo')
        return subscribers
    }
}