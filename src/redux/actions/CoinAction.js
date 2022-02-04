import { SET_COIN_DATA } from "../constance/action"

export const setCoins=(data)=>{
    return{
        type:SET_COIN_DATA,
        payload:data
    }
}