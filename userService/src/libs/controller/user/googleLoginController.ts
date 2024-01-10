import {Request,Response} from 'express'


export default  (dependencies:any)=>{
    const {useCase:{googleLogin_useCase}} = dependencies
    const {repository:{userRepository:{getUserByEmail}}} = dependencies
    const googleLogin = async(req:Request,res:Response)=>{
       try {
            console.log(req.body.user,'google user')
            let {executeFunction} = await googleLogin_useCase(dependencies)
            let user = await executeFunction(req.body.user)
            console.log(user,'after google user')
            res.json({message:'success',user:user})
       } catch (error:any) {
        res.json({message:error.message})
       }
        
    }

    return googleLogin
}