import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, userBuyData } from "../../redux/actions/UserAction";
import { BoxWrapper } from "../../styles/SingleBox.style";
import { currencyConverter, myCoinCount } from "../../utils/helps";
import Description from "./Description";

const MainBox = ({ setPopUp }) => {
  const [newCount, setCount] = useState(0);
  const [tempPrice, setTemp] = useState(0);

  const dispatch = useDispatch();

  const {
    singleCoin: { singleItem },
    user,
  } = useSelector((state) => state);
  const {isLoading,isLoggedIn}=user;
  const { money, haveCoins } = user.userData;

  const handleChange = (e) => {
    const newPrice = e.target.value * currentPrice;
    setCount(e.target.value);
    setTemp(newPrice);
  };
  const handleBuy = () => {
    if (tempPrice <= 0) {
      return;
    }
    if (tempPrice > money) {
      return alert("돈이 부족합니다!! 자산 포트폴리오를 확인해주세요 ");
    }
    dispatch(userBuyData({ coinID,newCount, symbol, name, currentPrice, coinLogo }));
    setPopUp(true);
    setCount(0);
    setTemp(0);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };
  const handleSell=()=>{
    alert("단기 투자는 좋지 않습니다! 장기간의 투자로 현명하게 투자하세요!")
  }

  const haveCoinCount = (data) => {
    if (!data) {
      return null;
    }
    return data.filter((item) => {
      if (item.symbol === singleItem.symbol) {
        return item;
      }
      return null;
    });
  };

  const handleLogin = () => {
    const user = {
      name: "기본 유저",
      money: 10000000,
      haveCoins: [],
      profitCoins: [],
    };
    localStorage.setItem("user_info", JSON.stringify(user));
    dispatch(setUserData(user));
  };

  
  const dataIs = singleItem.name !== "" && singleItem.symbol !== "";
  if(isLoading){
    return <h1>LOADING . . .</h1>
  }
  if(!dataIs){
    return <h1>LOADING . . .</h1>
  }


  const {
    name,
    symbol,
    image: { small: coinLogo },
    market_cap_rank,
    market_data,
    links,
    coinID
  } = singleItem;
  const {
    current_price: { krw: currentPrice },
    ath: { krw: allth },
    atl: { krw: alltl },
    ath_date: { krw: highDate },
    atl_date: { krw: lowDate },
    market_cap: { krw: marketCap },
    total_supply,
  } = market_data;
  const {
    homepage,
    repos_url: { github },
  } = links;

  return (
    <BoxWrapper>
      {/* Description box */}
      <Description />

      <div className="main">
        <h3 className="main__title">{name} 정보</h3>
        <div className="main__homepage">
          공식 홈페이지 :
          <a target={"_blank"} rel="noreferrer" href={homepage[0]}>
            {homepage[0]}
          </a>
        </div>

        {github[0] && (
          <ul className="main__source__code main__list">
            <h3>Source Code 사이트 : </h3>
            <a target={"_blank"} rel="noreferrer" href={github[0]}>
              {github[0]}
            </a>
          </ul>
        )}

        <div className="main__coin__info">
          <h3>시가 총액 : {currencyConverter(marketCap)}원</h3>
          <h3>시가총액 순위 : {market_cap_rank}위</h3>
          <h3>
            총 발행량 : {total_supply ? total_supply.toLocaleString() : "00"}{" "}
            코인
          </h3>
        </div>

        <form onSubmit={(e)=>{e.preventDefault()}} className="main__form">
          <div className="form__box">
            <h3>현재 가격 :{currentPrice.toLocaleString()} 원</h3>

            {isLoggedIn && (
              <>
                <h3>
                  구매 가능 코인 :{money / currentPrice} {symbol.toUpperCase()}{" "}
                </h3>

                <h3>
                  보유 코인 :{myCoinCount(haveCoinCount(haveCoins))}{" "}
                  {symbol.toUpperCase()}{" "}
                </h3>
                <h3>현재 잔고 :{money.toLocaleString()} 원 </h3>
              </>
            )}
          </div>
          <div className="form__btn">
            {isLoggedIn ? (
              <>
                <div className="form__buy__box">
                  <h3>주문 총액 : {tempPrice.toLocaleString()}원</h3>
                  <label htmlFor="price">주문 수량</label>
                  <input
                    type="number"
                    min={0}
                    value={newCount}
                    step={0.1}
                    onChange={handleChange}
                  />
                </div>
                <button className="bull" onClick={handleBuy}>
                  매수
                </button>
                <button  onClick={handleSell} className="bearish">매도</button>
              </>
            ) : (
              <button onClick={handleLogin}> 로그인후 매수, 매도 하기!</button>
            )}
          </div>
        </form>

        <footer className="main__footer">
          <div className="main__high">
            <h3 className="bull">최고가 : {allth.toLocaleString()}원</h3>
            <h3>최고 일시 : {highDate.slice(0, 10)}</h3>
          </div>

          <div className="main__low">
            <h3 className="bearish">최저가 : {alltl.toLocaleString()}원</h3>
            <h3>최저 일시 : {lowDate.slice(0, 10)}</h3>
          </div>
        </footer>
      </div>
    </BoxWrapper>
  );
};

export default MainBox;
