import React, { useEffect, useState } from "react";
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
import { HashTagsWrapper } from "../styles/SingleHeader";

// components
import SingleHeader from "../components/Single/SingleHeader";
import MainBox from "../components/Single/MainBox"

const SingleCoin = () => {
  const { id: coinID } = useParams();
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const {singleItem, loading } = useSelector((state) => state.singleCoin);


  const getSingleData = async () => {
    dispatch(loadingSingleCoin());
    console.log("1")
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinID}`
      );
      const {name,symbol,description,categories,image,last_updated,market_data,market_cap_rank,links} = await response.json();
      dispatch(setSingleCoin({name,description,symbol,categories,image,last_updated,market_data,market_cap_rank,links}));
    } catch {
      dispatch();
    }
  };

  // FORM

  useEffect(() => {
    console.log("11")
    getSingleData();
    // eslint-disable-next-line
  }, [coinID]);

  console.log(loading)
  if (loading) {
    return <h1>minji .....</h1>;
  }

  console.log("여개 정상")
  const { categories } = singleItem;

  return (
    <SingleCoinWrapper>
      <h2>SINGLE COIN</h2>
      {/* HEADER */}
      <SingleHeader />
      <hr />
      <HashTagsWrapper className="hashtags">
        {categories.map((item) => {
          return <li key={item}>#{item}</li>;
        })}
      </HashTagsWrapper>

      <MainBox setPopUp={setPopUp} />

      <div className={`popup ${popUp ? "active" : ""}`}></div>

      <hr />
    </SingleCoinWrapper>
  );
};

export default SingleCoin;
