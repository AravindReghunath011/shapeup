import mongoose,{ObjectId,Types} from 'mongoose'
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
        return Users
    },

    getUserByEmail:async(email:any)=>{
        let User = await user.findOne({email:email})
        return User
    }
}