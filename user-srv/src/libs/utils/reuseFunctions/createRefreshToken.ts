import jwt from 'jsonwebtoken'
export const createRefreshToken = (
    name:string,
    email:string,
    id:string
)=>{
    return jwt.sign({name,email,id} , 'secret');
}