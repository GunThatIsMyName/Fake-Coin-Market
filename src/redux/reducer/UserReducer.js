import {
  BUY_USER_DATA,
  LOADING_USER_DATA,
  PROFIT_USER_DATA,
  SET_USER_INIT,
} from "../constance/action";

const userStates = {
  isLoading:true,
  isLoggedIn: false,
  userData: {
    name: "",
    money: 0,
    haveCoins: [],
    profitCoins: [],
  },
};

export const userReducer = (state = userStates, { type, payload }) => {
  switch (type) {
    case SET_USER_INIT:
      if (payload === null) {
        return {...state,isLoading:false};
      }
      return { ...state, userData: payload, isLoggedIn: true,isLoading:false };
    case BUY_USER_DATA:
      const newState = {
        ...state,
        userData: {
          ...state.userData,
          money: Math.floor(
            state.userData.money -
              parseFloat(payload.newCount) * payload.currentPrice
          ),
          haveCoins: [
            ...state.userData.haveCoins,
            { ...payload, date: new Date().toLocaleString() },
          ],
        },
      };
      localStorage.setItem("user_info", JSON.stringify(newState.userData));
      return newState;
    case PROFIT_USER_DATA:
      return state;
    case LOADING_USER_DATA:
      return {...state,isLoading:true};
    default:
      return state;
  }
};
