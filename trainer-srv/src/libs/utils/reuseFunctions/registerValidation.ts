export const verifyRegisterData = async(data:any)=>{
    const {email,name,password} = data
    console.log(data,'klkk')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    console.log(isValidEmail,'hakdsfhkad')
    if(!isValidEmail){
         throw new Error("Invalid email ") 
    }
    const nameRegex =/^[a-zA-Z\s]+$/


    const isValidName = nameRegex.test(name);
    console.log(isValidName,'hakdsfhkad')
    if(!isValidName){
         throw new Error("Invalid name ") 
    }
    return true
}