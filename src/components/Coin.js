import React from "react";
import { CoinWrapper } from "../styles/Coin.style";

function Coin({
  image,
  id,
  symbol,
  name,
  current_price,
  price_change_percentage_24h,
}) {
  return (
    <CoinWrapper id={id}>
      <img className="coin__logo" src={image} alt={name} />
      <div className="coin__symbol">
        <h4>
        {symbol.toUpperCase()} 
        </h4>
        <span>{name}</span>
      </div>
      <h4>{current_price.toLocaleString()}원</h4>
      <h4
        className={`price ${
          price_change_percentage_24h > 0 ? "bull" : "bearish"
        }`}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </h4>
    </CoinWrapper>
  );
}

export default Coin;
