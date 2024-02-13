

    // const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/



    // const isValidPassword = passwordRegex.test(name);
    // console.log(isValidPassword,'hakdsfhkad')
    // if(!isValidPassword){
    //      throw new Error("Invalid password ") 
    // }

   


export const verifyLogin = (data:any)=>{
    const {name,email,password} = data
    const nameRegex =/^[a-zA-Z\s]+$/


    const isValidName = nameRegex.test(name);
    console.log(isValidName,'hakdsfhkad')
    if(!isValidName){
         throw new Error("Invalid name ") 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    console.log(isValidEmail,'hakdsfhkad')
    if(!isValidEmail){
         throw new Error("Invalid Email ") 
    }

    
return true

}

