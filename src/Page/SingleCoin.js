import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSingleCoin } from "../redux/actions/SingleCoinAction";
import { SingleCoinWrapper } from "../styles/SingleCoin.style";

const SingleCoin = () => {
  const dispatch = useDispatch();
  const { singleItem } = useSelector((state) => state.SingleCoin);

  const getSingleData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/tether"
    );
    const {
      name,
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
        categories,
        image,
        last_updated,
        market_data,
        market_cap_rank,
        links,
      })
    );
  };

  useEffect(() => {
    getSingleData();
  }, []);

  const {name,description,categories,image,last_updated,market_cap_rank,market_data,links} = singleItem;

  console.log(image)
  return (
    <SingleCoinWrapper>
      {/* HEADER */}
      <div className="header">
        <h3>{name}</h3>
        {}
      </div>
    </SingleCoinWrapper>
  );
};

export default SingleCoin;
