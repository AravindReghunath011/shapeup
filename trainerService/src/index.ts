import {app} from './app'
import { dbConnect } from './config/db'
import {trainerConsumer} from './events/trainerConsumer'


const start = async()=>{
    try {
        await dbConnect()
    } catch (error) {
        console.log(error)
    }




    app.listen(8001,()=>{
        console.log("Trainer service running at port 8001")
    }) 
}

start()

