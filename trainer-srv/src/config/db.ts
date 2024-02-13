import mongoose from "mongoose";
import dotenv from 'dotenv' 
dotenv.config({ path: '.env' })
export const dbConnect = async()=>{ 
    console.log(process.env.MONGO_PASSWORD)
    try {
        // await mongoose.connect(`mongodb://localhost:27017/trainerService`)
        // await mongoose.connect("mongodb://AravindReghunath:12345@ac-gu4xbme-shard-00-00.57qseds.mongodb.net:27017,ac-gu4xbme-shard-00-01.57qseds.mongodb.net:27017,ac-gu4xbme-shard-00-02.57qseds.mongodb.net:27017/Trainer-srv?ssl=true&replicaSet=atlas-3pawdm-shard-0&authSource=admin&retryWrites=true&w=majority")
        await mongoose.connect(`mongodb+srv://AravindReghunath:12345@cluster0.57qseds.mongodb.net/Trainer-srv?retryWrites=true&w=majority`)
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