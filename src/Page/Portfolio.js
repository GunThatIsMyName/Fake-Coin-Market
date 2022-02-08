import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userProfitData } from "../redux/actions/UserAction";
import { PortfolioWrapper } from "../styles/Portfolio.style";
import { myTotalCoin, uniqueCoins } from "../utils/helps";

const Portfolio = () => {
  const dispatch = useDispatch();

  const {
    userData: { haveCoins, money, profitCoins },
    isLoggedIn,
  } = useSelector((state) => state.user);

  const myCoins = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${uniqueCoins(
        haveCoins
      )}&vs_currencies=krw`
    );
    const data = await response.json();
    dispatch(userProfitData(data));
  };

  useEffect(() => {
    myCoins();
    // eslint-disable-next-line
  }, [haveCoins]);

  if (!isLoggedIn) {
    return <h1>로그인 되지 않았습니다!!!</h1>;
  }


  return (
    <PortfolioWrapper>
      <div className="coin__list">
        {haveCoins.length < 1 && (
          <>
            <div>
              <h3>보유 코인이 없습니다.</h3>
              <p>코인을 구매 하셔서 투자 성공 하세요</p>
            </div>
            <hr />
          </>
        )}
        {haveCoins.map((item) => {
          const {
            currentPrice: previousPrice,
            date,
            name,
            symbol,
            newCount,
            coinLogo,
            coinID,
          } = item;
          return (
            <div className="coin__coin" key={`${symbol}-${date}`}>
              <div className="coin__info">
                <img src={coinLogo} alt={name} />
                <h2>{name}</h2>
              </div>
              <p>구매 당시 가격{previousPrice.toLocaleString()}원</p>
              <p>
                보유 중인 코인: {newCount} {symbol}
              </p>

              {profitCoins[coinID] && (
                <h1>
                  {" "}
                  현재 가격{profitCoins[coinID]["krw"].toLocaleString()}원
                </h1>
              )}

              <h3 className="coin__price">
                보유 코인 가치 :
                {Math.floor(previousPrice * newCount).toLocaleString()}원
              </h3>

              {profitCoins[coinID] && (
                <div  >
                  {/* (매도총금액) / (매수총금액) * 100 - 100 */}
                <span>
                  수익률
                  </span> 
                  <span className={(profitCoins[coinID]["krw"] / previousPrice) * 100 - 100 > 0 ?"bull":"bearish"} >
                  {((profitCoins[coinID]["krw"] / previousPrice) * 100 - 100).toFixed(2)}%
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h3>사용 가능 자산 : {money}원</h3>

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
