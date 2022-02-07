import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userProfitData } from "../redux/actions/UserAction";
import { PortfolioWrapper } from "../styles/Portfolio.style";
import { myTotalCoin, uniqueCoins } from "../utils/helps";

const Portfolio = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    userData: { haveCoins, money },
    isLoggedIn,
  } = useSelector((state) => state.user);
  const hohoho = useSelector((state) => state);
  console.log(hohoho,"hoi");

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
    if (!isLoggedIn) {
      navigate("/");
    }
    myCoins();
  }, []);

  console.log(haveCoins,"haveCoins")
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
          } = item;
          return (
            <div className="coin__coin" key={`${symbol}-${date}`}>
              <div className="coin__info">
                <img src={coinLogo} alt={name} />
                <h2>{name}</h2>
              </div>
              <p>{previousPrice}원</p>
              <p>
                {newCount} {symbol}
              </p>

              <h3 className="coin__price">
                보유 가격 :{" "}
                {Math.floor(previousPrice * newCount).toLocaleString()}원
              </h3>

              <p>{date}</p>
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
