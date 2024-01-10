import {app} from './app'
import { dbConnect } from './config/db'


const start = async()=>{
    try {
        await dbConnect()
        
    } catch (error) {
        console.log(error)
    }




    app.listen(8000,()=>{
        console.log("users service running at port 8000")
    }) 
}

start()

