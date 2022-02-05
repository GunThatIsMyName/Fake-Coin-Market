import { combineReducers } from "redux";
import { coinReducer } from "./CoinReducer";
import { SingleCoinReducer } from "./SingleCoinReducer";

const reducers = combineReducers({
    coin:coinReducer,
    singleCoin:SingleCoinReducer
})

export default reducers;