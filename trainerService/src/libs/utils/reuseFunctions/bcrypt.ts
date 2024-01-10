import bcrypt from 'bcryptjs'

export const hashPassword = async(password:string)=>{
    let hashPass = await bcrypt.hash(password,10)
    console.log(hashPass)
    return hashPass
}

export const comparePassword = async(password:string,hashpass:string)=>{
    console.log(password,hashpass)
     let result = bcrypt.compare(password,hashpass)
     return result
}