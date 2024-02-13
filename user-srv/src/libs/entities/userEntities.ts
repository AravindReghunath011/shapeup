export interface userData{
    name:string
    email:string
    password:string | null
    following:object | []
    profile:string |null
    isBlocked:boolean 
    isVerified:boolean


}

export class userProfile{
    name:string
    email:string
    password:string | null
    following:object | []
    profile:string |null
    isBlocked:boolean 
    isVerified:boolean
    constructor({name,email,password,following,profile,isBlocked,isVerified}:userData){
        this.name = name
        this.email = email
        this.password = password
        this.following = following
        this.profile = profile
        this.isBlocked = isBlocked
        this.isVerified = isVerified
    }
}