import React from "react";
import { CoinWrapper } from "../../styles/Coin.style";
import { currencyConverter } from "../../utils/helps";

function Coin({
  image,
  id,
  symbol,
  name,
  current_price,
  price_change_percentage_24h,
  market_cap,
}) {
  return (
    <CoinWrapper id={id} to={{pathname:id,state:{id:"HELLO",symbol:"SYMBOL",name}}}>
      
      <div className="coin__main">
        <img className="coin__logo" src={image} alt={name} />
        <div className="coin__symbol">
          <h4>{symbol.toUpperCase()}</h4>
          <span>{name}</span>
        </div>
      </div>

      <h4 className="coin__info coin__price">
        {current_price.toLocaleString()}원
      </h4>

      <h4 className="coin__info coin__marketcap">
        {currencyConverter(market_cap)}
      </h4>

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
