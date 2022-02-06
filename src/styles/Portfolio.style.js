import styled from "styled-components";

export const PortfolioWrapper = styled.section`
  max-width: 1200px;
  width: 80%;
  margin:3rem auto;
  .coin__list{
      .coin__coin{
          display:grid;
          align-items:center;
          margin-bottom:10px;
          border-bottom:1px solid var(--color-grey);
          grid-template-columns:repeat(4,1fr);
          .coin__info{
              display:flex;
              align-items:center;
              img{
                  width:40px;
                  height:40px;
                  margin-right:10px;
              }
          }
          .coin__price{
              margin-left:auto;
          }
      }
  }
`;
