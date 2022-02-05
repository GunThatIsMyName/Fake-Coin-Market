import { LOADING_SINGLE_COIN, SINLGE_COIN_DATA } from "../constance/action"

export const setSingleCoin=(data)=>{
    return{
        type:SINLGE_COIN_DATA,
        payload:data
    }
}
export const loadingSingleCoin=()=>{
    return{
        type:LOADING_SINGLE_COIN,
    }
}