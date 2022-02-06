import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userBuyData } from "../../redux/actions/UserAction";
import { BoxWrapper } from "../../styles/SingleBox.style";
import { currencyConverter, myCoinCount } from "../../utils/helps";

const MainBox = ({ setPopUp }) => {
  const [newCount, setCount] = useState(0);
  const [tempPrice, setTemp] = useState(0);
  const [isKorean, setKorean] = useState(true);

  const dispatch = useDispatch();

  const {
    singleCoin: { singleItem, loading },
    user,
  } = useSelector((state) => state);
  const { money, haveCoins } = user && user;
  console.log({money,haveCoins})
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
    dispatch(userBuyData({ newCount, symbol, name, currentPrice, coinLogo }));
    setPopUp(true);
    setCount(0);
    setTemp(0);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };

  const haveCoinCount = (data) => {
    return data.filter((item) => {
      if (item.symbol === singleItem.symbol) {
        return item;
      }
      return null;
    });
  };

  const dataIs = singleItem.name !== "" && singleItem.symbol !== "";

  if (!dataIs || !money) {
    return null;
  }

  const {
    name,
    symbol,
    description,
    image: { small: coinLogo },
    market_cap_rank,
    market_data,
    links,
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
      <div className="box">
        <div className="box__btn">
          <button onClick={() => setKorean(true)}>한국어</button>
          <button onClick={() => setKorean(false)}>ENG</button>
        </div>
        <h4
          dangerouslySetInnerHTML={{
            __html: isKorean
              ? description.ko
                ? description.ko
                : "한국어 정보가 없습니다. 죄송합니다."
              : description.en
              ? description.en
              : "NO English Information Sorry.",
          }}
        />
      </div>

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

        {/* main BUY */}

        <form onSubmit={handleSubmit} className="main__form">
          <div className="form__box">
            <h3>현재 가격 :{currentPrice.toLocaleString()} 원</h3>
            <h3>
              구매 가능 코인 :{money / currentPrice} {symbol.toUpperCase()}{" "}
            </h3>

            <h3>
              보유 코인 :{myCoinCount(haveCoinCount(haveCoins))}{" "}
              {symbol.toUpperCase()}{" "}
            </h3>
            <h3>현재 잔고 :{money.toLocaleString()} 원 </h3>
          </div>
          <div className="form__btn">
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
            <button className="bearish">매도</button>
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
