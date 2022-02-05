import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  loadingSingleCoin,
  setSingleCoin,
} from "../redux/actions/SingleCoinAction";

// STYLE AND UTILS
import { SingleCoinWrapper } from "../styles/SingleCoin.style";
import { currencyConverter } from "../utils/helps";
import { useState } from "react";
import { HashTagsWrapper, SingleHeader } from "../styles/SingleHeader";
import { BoxWrapper } from "../styles/SingleBox.style";

const SingleCoin = () => {
  const [isKorean, setKorean] = useState(true);
  const { id: coinID } = useParams();
  const dispatch = useDispatch();
  const { singleItem, loading } = useSelector((state) => state.singleCoin);

  const getSingleData = async () => {
    dispatch(loadingSingleCoin());
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinID}`
      );
      const {
        name,
        symbol,
        description,
        categories,
        image,
        last_updated,
        market_data,
        market_cap_rank,
        links,
      } = await response.json();
      dispatch(
        setSingleCoin({
          name,
          description,
          symbol,
          categories,
          image,
          last_updated,
          market_data,
          market_cap_rank,
          links,
        })
      );
    } catch {
      dispatch();
    }
  };

  useEffect(() => {
    getSingleData();
  }, [coinID]);

  if (loading) {
    return <h1>LOADING .....</h1>;
  }

  // DESTRUCTURING
  const {
    name,
    symbol,
    description,
    categories,
    image: { small: coinLogo },
    last_updated,
    market_cap_rank,
    market_data,
    links,
  } = singleItem;
  const {
    homepage,
    repos_url: { github, bitbucket },
  } = links;
  const {
    current_price: { krw: currentPrice },
    price_change_percentage_24h,
    ath: { krw: allth },
    atl: { krw: alltl },
    ath_date: { krw: highDate },
    atl_date: { krw: lowDate },
    market_cap: { krw: marketCap },
    total_supply,
  } = market_data;

  console.log(homepage);

  return (
    <SingleCoinWrapper>
      {/* HEADER */}
      <SingleHeader className="single__header">
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
      </SingleHeader>

      <hr />
      <HashTagsWrapper className="hashtags">
        {categories.map((item) => {
          return <li key={item}>#{item}</li>;
        })}
      </HashTagsWrapper>

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

          <ul className="main__source__code main__list">
            <h3>Source Code 사이트 : </h3>
            {github.length > 0
              ? github.map((item) => {
                  return (
                    <a
                      style={{ display: "block" }}
                      target={"_blank"}
                      href={item}
                      rel="noreferrer"
                      key={item}
                    >
                      {item}
                    </a>
                  );
                })
              : null}
          </ul>

          <div className="main__coin__info">
            <h3>시가 총액 : {currencyConverter(marketCap)}원</h3>
            <h3>시가총액 순위 : {market_cap_rank}위</h3>
            <h3>
              총 발행량 : {total_supply ? total_supply.toLocaleString() : "00"}{" "}
              코인
            </h3>
            <h3>현재 가격 :{currentPrice.toLocaleString()} 원</h3>
          </div>

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

      <hr />
    </SingleCoinWrapper>
  );
};

export default SingleCoin;
