import styled from "styled-components";

export const SingleCoinWrapper = styled.section`
  padding: 2rem 0;
  max-width: 1200px;
  width: 80%;
  margin: auto;
  
  /* border:1px solid var(--color-grey); */
  .single__header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    .single__logo {
      display: flex;
      align-items: center;
      .single__image {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
    }
    p {
      color: var(--color-grey);
    }
  }

  /* .hashtags {
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
  } */

  .main__form{
    display:flex;
    justify-content:space-between;
    align-items:center;
    .form__btn{
      .form__buy__box{
        margin-bottom:10px;
      }
      button{
        margin-right:1rem;
        font-size:1.5rem;
        padding:10px 2rem;
      }
    }
  }

  main {
    display: flex;
    grid-gap: 2rem;
    /* grid-template-columns: auto 1fr; */
    .box {
      width: 400px;
      .box__btn {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        button {
          margin-right: 5px;
        }
      }
      h4 {
        padding: 1rem;
        line-height: 1.3rem;
        overflow-y: auto;
        height: 60vh;
      }
    }
  }

  .popup{
    overflow-x:hidden;
    position:absolute;
    bottom:10%;
    border-radius:10px;
    width:300px;
    height:50px;
    background-color:white;
    right:3rem;
    transform:translateX(200%);
    transition:0.3s all linear;
    &.active{
      transform:translateX(0%);
    }
  }

  @media screen and (max-width: 720px) {
    main {
      flex-direction: column-reverse;
      .box {
        width: 100%;
        h4 {
          height: 400px;
        }
      }
    }
  }
`;
