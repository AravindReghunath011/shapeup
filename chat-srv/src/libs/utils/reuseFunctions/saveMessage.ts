export const saveMessage = async (dependencies:any,data:any)=>{
    try {
        const {repository:{chatRepository}} = dependencies
        let chatExist =  await chatRepository.findRoomExist(data)
        console.log(chatExist,'chat')
        if(chatExist){
            console.log('ifff')
            let newChat = await chatRepository.saveMessage(data)
            
        }else{
            console.log('else')
            let newRoom = await chatRepository.newRoom(data)
        }
    } catch (error:any) {
        console.log(error)
        return error.message
    }
} 