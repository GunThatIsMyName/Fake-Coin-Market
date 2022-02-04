import { useSelector, useDispatch } from "react-redux";
import Coin from "./Coin";
import { setCoins } from "../redux/actions/CoinAction";
import { coinApiEndPoint } from "../utils/Api";
import { useEffect, useState } from "react";
import { HeroWrapper } from "../styles/Hero.style";

function Hero() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { coin } = useSelector((state) => state.coin);

  const getCoinData = async () => {
    const response = await fetch(
      `${coinApiEndPoint}per_page=8&page=${page}&sparkline=false`
    );
    const data = await response.json();

    dispatch(setCoins(data));
  };

  useEffect(() => {
    getCoinData();
  }, [page]);

  // const coinList = coin.splice(0,5);
  // console.log(coinList)

  return (
    <HeroWrapper className="App">
      <h1>Buy & sell Crypto in minutes</h1>

      <p>Join the world's largest crypto exchange</p>

      <button>Discover More</button>

      {coin
        .map((item) => {
          return <h1 key={item.id}>{item.name}</h1>;
        })
        .splice(0, 5)}
      <h1>------</h1>

      {coin.map((item) => {
        return <Coin key={item.id} {...item} />;
      })}

      <button onClick={() => setPage((prev) => prev + 1)}>More Coins</button>
    </HeroWrapper>
  );
}

export default Hero;
