import mongoose,{ObjectId,Types} from 'mongoose'
import {schemas} from '../database/mongoDB'
const {admin} = schemas;

export default {
    getAllAdmins: async()=>{
        let Admins = await admin.find({})
        return Admins
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
    
}