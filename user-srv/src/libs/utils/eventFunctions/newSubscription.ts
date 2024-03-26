
export const newSubscription=async(dependencies:any,data:any)=> {
    try {
        console.log('entered new sub')
        const {repository:{userRepository}} = dependencies
        const updateUser = await userRepository.updateSubscriptionList(data)
        console.log(updateUser,'fromm new follow')
        
    } catch (error:any) {
        throw new Error(error?.message)
    }
}