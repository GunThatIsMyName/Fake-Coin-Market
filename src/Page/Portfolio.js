import React from "react";
import { useSelector } from "react-redux";
import { PortfolioWrapper } from "../styles/Portfolio.style";
import { myTotalCoin } from "../utils/helps";

const Portfolio = () => {
  const { haveCoins, name, money } = useSelector((state) => state.user);
  return (
    <PortfolioWrapper>
      <div className="coin__list">
        {haveCoins.map((item) => {
          const {
            currentPrice: previousPrice,
            date,
            name,
            symbol,
            newCount,
            coinLogo,
          } = item;
          return (
            <div className="coin__coin" key={`${symbol}-${date}`}>
              <div className="coin__info">
                <img src={coinLogo} alt={name} />
                <h2>{name}</h2>
              </div>
              <p>{previousPrice.toLocaleString()}원</p>
              <p>
                {newCount} {symbol}
              </p>

              <h3 className="coin__price" >보유 가격 : {Math.floor(previousPrice * newCount).toLocaleString()}원</h3>

              <p>{date}</p>
            </div>
          );
        })}
      </div>

      <h3>사용 가능 자산 : {money.toLocaleString()}원</h3>

      <h3>
        코인 자산 : {Math.floor(myTotalCoin(haveCoins)).toLocaleString()} 원
      </h3>

      <h4>
        순 자산 : {Math.floor(money + myTotalCoin(haveCoins)).toLocaleString()}{" "}
        원
      </h4>
    </PortfolioWrapper>
  );
};

export default Portfolio;
