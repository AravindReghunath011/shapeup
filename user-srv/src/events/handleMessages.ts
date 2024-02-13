import { userConsumer } from "./userConsumer"


export const  handleMessage =async(message:any)=>{
    try {
        let message = await userConsumer()
        console.log(message , 'from handle message')
        
    } catch (error) {
        console.log(error)
    }
}