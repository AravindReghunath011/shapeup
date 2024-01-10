import {Request,Response} from 'express'


export default  (dependencies:any)=>{
    const {useCase:{googleLogin_useCase}} = dependencies
    const {repository:{adminRepository:{getadminByEmail}}} = dependencies
    const googleLogin = async(req:Request,res:Response)=>{
       try {
            console.log(req.body.admin,'google admin')
            let {executeFunction} = await googleLogin_useCase(dependencies)
            let admin = await executeFunction(req.body.admin)
            console.log(admin,'after google admin')
            res.json({message:'success',admin:admin})
       } catch (error:any) {
        res.json({message:error.message})
       }
        
    }

    return googleLogin
}