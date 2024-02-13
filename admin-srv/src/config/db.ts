import mongoose from "mongoose";
import dotenv from 'dotenv' 
dotenv.config({ path: '.env' })
export const dbConnect = async()=>{ 
    try {
        // await mongoose.connect(`mongodb://localhost:27017/adminService`)
        console.log(process.env.MONGO_PASSWORD)
        await mongoose.connect(`mongodb+srv://AravindReghunath:${process.env.MONGO_PASSWORD}@cluster0.57qseds.mongodb.net/Admin-srv?retryWrites=true&w=majority`)
        .then(()=>console.log('Db connected ')) 
        .catch((err)=>{
        throw new Error('Mongo Db error')

        })      
    } catch (error) {
        console.log(error)
        setTimeout(() => {
            dbConnect()
        }, 5000);
        
    }  
}     