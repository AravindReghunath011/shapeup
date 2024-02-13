import { adminProfile, adminData } from "../../entities"

export const addadmin_useCase = (dependencies:any)=>{
    const {repository:{adminRepository}} = dependencies
    if(!adminRepository) throw new Error('repo error')
    const executeFunction = async({name,email,password}:adminData)=>{
            let data = {
                name,
                email,
                password,
                followers:[],
                posts:[],
                videos:[],
                profile:null,
                isBlocked:false,
                isVerified:false


            }
            const admin:object = new adminProfile(data)
            const adminData = await adminRepository.createadmin(admin)
            return {adminData}
    }
    return {executeFunction}
}   