import {Request,Response} from 'express'
import {verifyLogin,createAccessToken} from '../../utils/reuseFunctions'


export default  (dependencies:any)=>{
    const {useCase:{adminLogin_useCase,createAccessToken_useCase}} = dependencies
    const {repository:{adminRepository:{getadminByEmail}}} = dependencies
    const loginadmin = async(req:Request,res:Response)=>{
        try {
            const {email,password} = req.body
        const verified = verifyLogin({email,password})
        if(verified){
            const {executeFunction} = adminLogin_useCase(dependencies)
            let admin = await executeFunction({email,password})
            let accessToken = createAccessToken(admin.name,admin.email)
            console.log(accessToken,'logincont')
            res.json({message:'success',admin:admin,accessToken:accessToken}) 
        }else{
            throw new Error('Check your credentials')
        }
        } catch (error:any) {
            console.log(error.message,'ooooo')
            res.json({message:error.message})
        }
        

    }

    return loginadmin
}