import { useSelector, useDispatch } from "react-redux";
import Coin from "./Coin";
import { setCoins } from "../redux/actions/CoinAction";
import { coinApiEndPoint } from "../utils/Api";
import { useEffect, useState } from "react";
import { HeroWrapper, HeroEvent } from "../styles/Hero.style";
import { CoinItem } from "./Hero/CoinItem";

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

  console.log(coin,"coin")

  return (
    <HeroWrapper>
      <HeroEvent>
        <div className="hero__event">
          <h1>Buy & sell Crypto in minutes</h1>
          <p>Join the world's largest crypto exchange</p>
          <button>Discover More</button>
        </div>
        <div className="hero__coin">
          {coin
            .map((item) => {
              return <CoinItem key={item.id} {...item} />;
            })
            .splice(0, 5)}
        </div>
      </HeroEvent>

      {/* Hero  */}

      <h1 className="hero__line">Market List</h1>

      {coin.map((item) => {
        return <Coin key={item.id} {...item} />;
      })}

      <button onClick={() => setPage((prev) => prev + 1)}>More Coins</button>
    </HeroWrapper>
  );
}

export default Hero;
