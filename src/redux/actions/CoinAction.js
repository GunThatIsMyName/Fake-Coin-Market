import { RESET_COIN_DATA, SET_COIN_DATA } from "../constance/action"

export const setCoins=(data)=>{
    return{
        type:SET_COIN_DATA,
        payload:data
    }
}
export const resetCoins=()=>{
    return{
        type:RESET_COIN_DATA,
    }
}