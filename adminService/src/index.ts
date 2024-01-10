import {app} from './app'
import { dbConnect } from './config/db'


const start = async()=>{
    try {
        await dbConnect()
        
    } catch (error) {
        console.log(error)
    }




    app.listen(8002,()=>{
        console.log("Admin service running at port 8002")
    }) 
}

start()

