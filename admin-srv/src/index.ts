import {app} from './app'
import { dbConnect } from './config/db'
import { adminConsumer } from './events/consumer'
import { adminProducer } from './events/adminProducer'
import {init} from './events/creatingTopic'


const start = async()=>{
    try {
        
        await adminConsumer()
        await dbConnect()
        
    } catch (error) {
        console.log(error)
    }




    app.listen(8002,()=>{
        console.log("Admin service running at port 8002")
    }) 
}

start()

