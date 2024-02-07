import {app} from './app'
import { dbConnect } from './config/db'
import dependencies from './config/dependencies'
import { userConsumer } from './events/userConsumer'

const start = async()=>{
    try {
        // await userConsumer(dependencies)
        await dbConnect()
        
    } catch (error) {
        console.log(error)
    }




    app.listen(8000,()=>{
        console.log("users service running at port 8000")
    }) 
}

start()

