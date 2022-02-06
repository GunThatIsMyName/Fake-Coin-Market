import { SET_USER_INIT } from "../constance/action";

const userStates={
    name: "",
    money: 0,
}

export const userReducer = (state=userStates,{type,payload})=>{
    switch (type) {
        case SET_USER_INIT:
            return {...state,...payload};
        default:
            return state;
    }
}