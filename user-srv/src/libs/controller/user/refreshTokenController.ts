import {Request,Response} from 'express'
import {verifyLogin,createAccessToken} from '../../utils/reuseFunctions/'


export default  (dependencies:any)=>{
    const refreshToken = async(req:Request,res:Response)=>{
        try{
            const {useCase:{refreshToken_useCase}} = dependencies
            console.log("In refreshtoken controller" , req.session.refreshToken);
            const response = await refreshToken_useCase(dependencies).execute(req.session.refreshToken);
            console.log("Response ==>",response)
            res.status(200).json(response);
        }catch(err){
            console.log("Something went wrong." , err)
        }

    }

    return refreshToken;
}