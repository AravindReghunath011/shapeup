import {server} from './app'
import { dbConnect } from './config/db'
import dependencies from './config/dependencies'
import { userConsumer } from './events/userConsumer'
const PORT = process.env.PORT || 8005;


const start = async()=>{
    try {
        // await userConsumer(dependencies)
        await dbConnect()
        
    } catch (error) {
        console.log(error)
    }




    server.listen(PORT)
  .on('listening', () => {
    console.log('Server running on Port ', PORT);
  })
  .on('error', (err: any) => {
    console.error('Server error:', err);
  });

      
      
      
}

start()

