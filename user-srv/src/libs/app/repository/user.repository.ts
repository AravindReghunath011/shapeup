import mongoose,{ObjectId,Types} from 'mongoose'
import { userProducer } from '../../../events/userProducer';
import {schemas} from '../database/mongoDB'
const {user} = schemas;

export default {
    createUser: async(data:any)=>{
        const userData = {
            name:data.name,
            email:data.email,
            password:data.password,
            following:data.following,
            profile:data.profile,
            isBlocked:data.isBlocked
        }

        console.log(userData)
        const User =  await user.create(userData)
        console.log(User,'repo')
        return User
    },

    getAllUsers: async()=>{
        let Users = await user.find({})
        console.log(Users,'from getallusers repository')
        return Users

        
    },

    trainersList: async()=>{
        
        await userProducer('get Trainers List','trainer','trainersListFromUser')
    },

    getUserByEmail:async(email:any)=>{
        let User = await user.findOne({email:email})
        return User
    },
    updateFollowingList:async(data:any)=>{
        let updateUser = await  user.updateOne({_id : data.userId},{$push:{following:data.trainerId}})
        console.log("Update Follow list",updateUser);
        if(!updateUser){
            throw new Error ('Error in Updating follower list');
        }else{
           return 'success'
        }
    },
    updateSubscriptionList: async (data: any) => {
        console.log(data, 'data in subscription');
        try {
            let updateUser = await user.updateOne(
                { _id: data.userId },
                { $addToSet: { subscription: data.trainerId } },
                { new: true }
            );
            console.log("Update data", updateUser);
            if (!updateUser) {
                throw new Error('Error in updating subscription list');
            } else {
                return 'success';
            }
        } catch (error) {
            console.error('Error in updating subscription list:', error);
            throw error;
        }
    },
    
    getSubscribersList:async(trainerId:string)=>{
        const subscriptionList = await user.find({ subscription: { $in: [trainerId] } });
        console.log(subscriptionList,'from repo')
        return subscriptionList
    },
}