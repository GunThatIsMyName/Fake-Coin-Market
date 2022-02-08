import { LOADING_SINGLE_COIN, SINLGE_COIN_DATA } from "../constance/action";

const singleCoinStates = {
    singleItem:{
        name: "",
        symbol:"",
        description: {},
        categories: [],
        image: "",
        last_updated: "",
        market_cap_rank: 0,
        market_data: {},
        links: {},
    },
    loading:false,
};

export const SingleCoinReducer = (state = singleCoinStates,{ type, payload }) => {
  switch (type) {
    case SINLGE_COIN_DATA:
      return {...state,loading:false,singleItem:{...payload}};
    case LOADING_SINGLE_COIN:
      return {...state,loading:true}
    default:
      return state;
  }
};
