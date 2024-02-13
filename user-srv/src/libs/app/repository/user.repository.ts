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
    }
}