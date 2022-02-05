import { Link } from "react-router-dom";
import styled from "styled-components";

export const CoinWrapper = styled(Link)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  margin-bottom: 1rem;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s linear;
  .coin__main {
    display: flex;
  }
  .coin__logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  .coin__symbol {
    font-weight: bold;
    display: flex;
    align-items: center;
    h4 {
      font-size: 1.3rem;
      margin-right: 10px;
    }
    span {
      font-size: 1.1rem;
      color: var(--color-grey);
    }
  }
  .coin__info {
    margin: auto;
  }
  .price {
    margin-left: auto;
  }
  &:hover {
    background: var(--color-grey);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 10px;
    .coin__marketcap {
      display: none;
    }
    .coin__symbol {
      h4 {
        font-size: 1rem;
      }
      span {
        display: none;
      }
    }
    .coin__logo {
      width:30px;
      height:30px;
      margin-right: 5px;
    }
  }
`;
