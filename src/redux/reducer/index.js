import { combineReducers } from "redux";
import { coinReducer } from "./CoinReducer";

const reducers = combineReducers({
    coin:coinReducer
})

export default reducers;