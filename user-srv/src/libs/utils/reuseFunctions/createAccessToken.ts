import jwt from 'jsonwebtoken'

export const createAccessToken = (email:string,name:string,id:string)=>{
        let data = {
            email:email,
            name:name,
            id:id
        }
        let accessToken = jwt.sign(data,'secret',{expiresIn:'10s'})
        
        return accessToken
}