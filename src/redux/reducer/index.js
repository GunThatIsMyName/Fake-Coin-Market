import { combineReducers } from "redux";
import { coinReducer } from "./CoinReducer";
import { SingleCoinReducer } from "./SingleCoinReducer";
import { userReducer } from "./UserReducer";

const reducers = combineReducers({
    coin:coinReducer,
    singleCoin:SingleCoinReducer,
    user:userReducer
})

export default reducers;