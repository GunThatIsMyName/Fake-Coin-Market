import { BUY_USER_DATA, PROFIT_USER_DATA, SET_USER_INIT } from "../constance/action";

const userStates = {
  name: "",
  money: 0,
  haveCoins: [],
  profitCoins:[],
};

export const userReducer = (state = userStates, { type, payload }) => {
  switch (type) {
    case SET_USER_INIT:
      return { ...state, ...payload };
    case BUY_USER_DATA:
      const newState = {
        ...state,
        money:Math.floor(state.money - payload.newCount * payload.currentPrice) ,
        haveCoins: [
          ...state.haveCoins,
          { ...payload, date: new Date().toLocaleString() },
        ],
      };
      localStorage.setItem("user_info", JSON.stringify(newState));
      return newState;
    case PROFIT_USER_DATA:
      console.log(payload)
      return state;
    default:
      return state;
  }
};
