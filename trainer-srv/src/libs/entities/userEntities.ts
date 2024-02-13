export interface trainerData{
    name:string
    email:string
    password:string | null
    followers:object | []
    posts:object | []
    videos:object | []
    profile:string |null
    isBlocked:boolean 
    isVerified:boolean


}

export class trainerProfile{
    name:string
    email:string
    password:string | null
    followers:object | []
    posts:object | []
    videos:object | []
    profile:string |null
    isBlocked:boolean 
    isVerified:boolean
    constructor({name,email,password,videos,followers,posts,profile,isBlocked,isVerified}:trainerData){
        this.name = name
        this.email = email
        this.password = password
        this.followers = followers
        this.profile = profile
        this.isBlocked = isBlocked
        this.isVerified = isVerified
        this.posts = posts
        this.videos = videos
    }
}