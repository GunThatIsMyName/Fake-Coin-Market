import { BUY_USER_DATA, PROFIT_USER_DATA, SET_USER_INIT } from "../constance/action"

export const setUserData = (data)=>{
    return{
        type:SET_USER_INIT,
        payload:data
    }
}
export const userBuyData = (data)=>{
    return{
        type:BUY_USER_DATA,
        payload:data
    }
}
export const userProfitData = (data)=>{
    return{
        type:PROFIT_USER_DATA,
        payload:data
    }
}