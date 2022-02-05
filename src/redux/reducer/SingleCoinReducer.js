import { SINLGE_COIN_DATA } from "../constance/action";

const singleCoinStates = {
    singleItem:{
        name: "",
        description: {},
        categories: [],
        image: "",
        last_updated: "",
        market_cap_rank: 0,
        market_data: {},
        links: {},
    },
};

export const SingleCoinReducer = (state = singleCoinStates,{ type, payload }) => {
  switch (type) {
    case SINLGE_COIN_DATA:
        console.log(payload,"pay")
      return {...state,singleItem:{...payload}};
    default:
      return state;
  }
};
