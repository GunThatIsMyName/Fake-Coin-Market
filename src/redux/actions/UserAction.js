import { SET_USER_INIT } from "../constance/action"

export const setUserData = (data)=>{
    console.log("3")
    console.log(data)
    return{
        type:SET_USER_INIT,
        payload:data
    }
}