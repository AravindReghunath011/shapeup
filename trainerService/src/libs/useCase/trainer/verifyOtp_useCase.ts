export const verifyOtp_useCase = (dependencies:any) =>{
    try{
        const {repository:{trainerRepository}}  = dependencies
    if(!trainerRepository) throw new Error('repo error in getEmail')
    const executeFunction = async(email:string,otp:string)=>{
        console.log(email,otp,'from otp usecase')
        const {getTrainerByEmail,updateOtp} = trainerRepository
        const trainer = await getTrainerByEmail(email)
        if(trainer.otp==otp){
            setTimeout(async function() {
                
                await updateOtp(email,0)
            }, 2 * 60 * 1000);
            return true
        }
        return false
    
    }
    return {executeFunction}
}catch(err:any){
        console.log(err)
    } 
    
}
