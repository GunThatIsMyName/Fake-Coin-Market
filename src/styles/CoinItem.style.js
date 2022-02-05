import styled from "styled-components";

export const CoinItemWrapper = styled.div`
  font-size: 1.3rem;
  border: 1px solid var(--color-white);
  border-radius:10px;
  text-align:center;
  padding:1rem 0;
  .list__coin{
    display:flex;
    justify-content:center;
    h4{
      &::after{
        content:"/";
        width:2px;
        height:2px;
        margin:0 5px;
        display:inline-block;
      }
    }
  }

  @media screen and (max-width:1250px){
    font-size: 1rem;
    .list__coin{
      flex-direction:column;
      h4{
      &::after{
        display:none;
      }
    }
    }
  }
`;
