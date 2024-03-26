import {app} from './app'
import { dbConnect } from './config/db'
import dotenv from 'dotenv'
dotenv.config()
import {trainerConsumer} from './events/trainerConsumer'
import { trainerProducer } from './events/trainerProducer'


const start = async()=>{
    try {
        // console.log("Producinggg.....")
        // await trainerProducer({name:'Anas' , email:"anasna@gmail.com"},'admin','returnTrainersToUser')        
        await dbConnect()
    } catch (error) {
        console.log(error)
    }




    app.listen(8001,()=>{
        console.log("Trainer service running at port 8001")
    }) 
}

start()

        