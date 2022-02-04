import React from "react";
import { CoinItemWrapper } from "../../styles/CoinItem.style";

export const CoinItem = ({ price_change_percentage_24h, current_price,symbol, id, name }) => {
  return (
    <CoinItemWrapper id={id}>
        <h1>
            {name} / {symbol}
        </h1>
        <span className={` ${price_change_percentage_24h > 0 ? "bull" : "bearish"}`}>
            {price_change_percentage_24h.toFixed(2)}%
        </span>
        <h3>{current_price.toLocaleString()} 원</h3>
    </CoinItemWrapper>
  );
};

