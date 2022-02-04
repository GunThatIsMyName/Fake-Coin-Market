import { SET_COIN_DATA } from "../constance/action";

const coinStates = {
    coin:[]
};

export const coinReducer = (state = coinStates, { type, payload }) => {
  switch (type) {
      case SET_COIN_DATA:
          return {...state,coin:[...state.coin,...payload]};
    default:
      return state;
  }
};
