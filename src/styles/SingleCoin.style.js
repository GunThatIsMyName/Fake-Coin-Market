import styled from "styled-components";

export const SingleCoinWrapper = styled.section`
  padding: 2rem 0;
  max-width: 1200px;
  width: 80%;
  margin: auto;
  /* border:1px solid var(--color-grey); */

  .hashtags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    li {
      border-radius: 5px;
      color: var(--color-white);
      background-color: var(--color-grey);
      margin-right: 5px;
      padding: 5px;
    }
  }

  main {
    display: flex;
    grid-gap: 2rem;
    /* grid-template-columns: auto 1fr; */
    .box {
      width: 400px;
      .box__btn {
          display:flex;
          justify-content:center;
          margin-bottom: 10px;
        button {
          margin-right: 5px;
        }
      }
      h4 {
          padding:1rem;
          line-height:1.3rem;
        overflow-y: auto;
        height: 60vh;
      }
    }
  }

  @media screen and (max-width:720px){
      main{
        flex-direction:column-reverse;
        .box{
            width:100%;
            h4{
                height:400px;
            }
        }
      }
  }
`;
