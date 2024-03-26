import {Request,Response} from 'express'
import {verifyLogin,createAccessToken} from '../../utils/reuseFunctions/'


export default  (dependencies:any)=>{
    const {useCase:{userLogin_useCase}} = dependencies
    const {repository:{userRepository:{getUserByEmail}}} = dependencies
    const loginUser = async(req:Request,res:Response)=>{
        try {
            const {email,password} = req.body
        const verified = verifyLogin({email,password})
        if(verified){
            const {executeFunction} = userLogin_useCase(dependencies)
            let {accessToken,userExist,refreshToken} = await executeFunction({email,password})
            req.session.refreshToken = refreshToken;
            console.log("This is referesh token ==> " , refreshToken);
            let user = {
                name:userExist.name,
                email:userExist.email,
                id:userExist._id,
            }
            res.json({message:'success',accessToken:accessToken,user:user}) 
        }else{
            throw new Error('Check your credentials')
        } 
        } catch (error:any) {
            console.log(error.message,'ooooo')
            res.json({message:error.message})
        }
        

    }

    return loginUser
}