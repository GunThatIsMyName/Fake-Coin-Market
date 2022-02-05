import React from "react";
import { currencyConverter } from "../../utils/helps";

const MainBox = ({
  marketCap,
  total_supply,
  name,
  homepage,
  github,
  bitbucket,
  market_cap_rank,
  currentPrice,
  allth,
  alltl,
  lowDate,
  highDate,
}) => {
  return (
    <div className="main">
      <h3>{name} 정보</h3>
      <div>
        홈페이지 :
        <a target={"_blank"} rel="noreferrer" href={homepage}>
          {homepage}
        </a>
      </div>

      <ul>
        {github.length > 0 && <h1>github</h1>}
        {github.length > 0 &&
          github.map((item) => {
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
          })}
        {bitbucket.length > 0 && <h1>bitbucket</h1>}
        {bitbucket.length > 0
          ? bitbucket.map((item) => {
              return <li key={item}>{item}</li>;
            })
          : null}
      </ul>

      <p>시가총액 순위 : {market_cap_rank}</p>

      <div>
        <h1>현재 가격 :{currentPrice.toLocaleString()} 원</h1>
        <h3>최고가 : {allth.toLocaleString()}원</h3>
        <h3>최고 일시 : {highDate}</h3>
        <h3>최저가 : {alltl.toLocaleString()}원</h3>
        <h3>최저 일시 : {lowDate}</h3>

        <h3>시가 총액 : {currencyConverter(marketCap)}원</h3>
        <h3>
          총 발행량 : {total_supply ? total_supply.toLocaleString() : "00"} 코인
        </h3>
      </div>
    </div>
  );
};

export default MainBox;
