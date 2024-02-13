
export const newFollow=async(dependencies:any,data:any)=> {
    try {
        console.log('entered new fOllow')
        const {repository:{userRepository}} = dependencies
        const updateUser = await userRepository.updateFollowingList(data)
        console.log(updateUser,'fromm new follow')
        
    } catch (error:any) {
        throw new Error(error?.message)
    }
}