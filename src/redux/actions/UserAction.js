import { BUY_USER_DATA, LOADING_USER_DATA, PROFIT_USER_DATA, SET_USER_INIT } from "../constance/action"

export const setUserData = (data)=>{
    console.log("3")
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
    console.log(PROFIT_USER_DATA,"보냄");
    return{
        type:PROFIT_USER_DATA,
        payload:data
    }
}
export const readyreadyready = ()=>{
    return{
        type:LOADING_USER_DATA,
    }
}