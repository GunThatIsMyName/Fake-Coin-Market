import styled from "styled-components";

export const CoinWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
  padding:10px;
  cursor: pointer;
  transition:0.3s linear;
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
  .price {
    margin-left: auto;
  }
  &:hover{
      background:var(--color-grey);
      /* .coin__symbol{
          span{
              color:var(--color-white);
          }
      } */
  }
`;
