import { SINLGE_COIN_DATA } from "../constance/action"

export const setSingleCoin=(data)=>{
    console.log(data,"data")
    return{
        type:SINLGE_COIN_DATA,
        payload:data
    }
}