import React from "react";
import { useSelector } from "react-redux";
import { SingleWrapper } from "../../styles/SingleHeader";

const SingleHeader = () => {
  const { singleItem } = useSelector((state) => state.singleCoin);
  // console.log(singleItem)

  const dataIs = singleItem.name !== "" && singleItem.symbol !== "";

  if (!dataIs) {
    return null;
  }
  console.log(singleItem, "single");
  const {
    name,
    symbol,
    market_data,
    image: { small: coinLogo },
    last_updated,
  } = singleItem;
  const {
    current_price: { krw: currentPrice },
    price_change_percentage_24h,
  } = market_data;
  if (!currentPrice) {
    return <h1>LOADING....</h1>;
  }

  return (
    <SingleWrapper className="single__header">
      <div className="single__logo">
        <img className="single__image" src={coinLogo} alt={name} />
        <h4 className="single__coin">
          {name.toUpperCase()} / {symbol.toUpperCase()}
        </h4>
      </div>

      <h1>{currentPrice.toLocaleString()} 원</h1>
      <h1 className={price_change_percentage_24h > 0 ? "bull" : "bearish"}>
        {price_change_percentage_24h.toFixed(2)}%
      </h1>
      <p className="single__date last__updated">{last_updated}</p>
    </SingleWrapper>
  );
};

export default SingleHeader;
