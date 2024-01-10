import {Request,Response} from 'express'
import {verifyLogin,createAccessToken} from '../../utils/reuseFunctions/'


export default  (dependencies:any)=>{
    const {useCase:{userLogin_useCase,createAccessToken_useCase}} = dependencies
    const {repository:{userRepository:{getUserByEmail}}} = dependencies
    const loginUser = async(req:Request,res:Response)=>{
        try {
            const {email,password} = req.body
        const verified = verifyLogin({email,password})
        if(verified){
            const {executeFunction} = userLogin_useCase(dependencies)
            let user = await executeFunction({email,password})
            let accessToken = createAccessToken(user.name,user.email)
            console.log(accessToken,'logincont')
            res.json({message:'success',user:user,accessToken:accessToken}) 
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