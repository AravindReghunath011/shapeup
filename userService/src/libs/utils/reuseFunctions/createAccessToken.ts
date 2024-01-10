import jwt from 'jsonwebtoken'

export const createAccessToken = (email:string,name:string)=>{
        let data = {
            email:email,
            name:name
        }
        let accessToken = jwt.sign(data,'secret',{expiresIn:'10m'})
        
        return accessToken
}