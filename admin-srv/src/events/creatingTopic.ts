
import { kafka } from "../config/kafkaClient";


export async function init() {
    const admin = kafka.admin()
    console.log('admin connecting')
    admin.connect()
    console.log('connected admin')
    console.log('createing topic')
    await admin.createTopics({
        topics:[
        {
            topic:"first-topic",
            numPartitions:1
        }
        ]
    })
    console.log('created topic')
await admin.disconnect()

    
}
init() 