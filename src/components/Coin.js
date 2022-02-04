import React from "react";
import { CoinWrapper } from "../styles/Coin.style";

function Coin({ image, id, symbol, name, current_price }) {
  return (
    <CoinWrapper id={id}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>Price : {current_price}</h4>
      <p>Coin Symbol : {symbol}</p>
    </CoinWrapper>
  );
}

export default Coin;
