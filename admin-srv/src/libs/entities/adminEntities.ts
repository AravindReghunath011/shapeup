export interface adminData{
    name:string
    email:string
    password:string | null
    isVerified:boolean,

}

export class adminProfile{
    name:string
    email:string
    password:string | null
    isVerified:boolean
    constructor({name,email,password,isVerified}:adminData){
        this.name = name
        this.email = email
        this.password = password
        this.isVerified = isVerified
    }
}