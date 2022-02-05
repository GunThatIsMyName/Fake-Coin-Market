import styled from "styled-components";

export const HeroWrapper = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: auto;
  .hero__line {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const HeroEvent = styled.div`
  background: var(--color-hero);
  padding: 2rem;
  .hero__event {
    margin-bottom: 3rem;
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }
    p {
      margin: 1rem 0;
      font-size: 1.2rem;
      color: var(--color-grey);
    }
    button {
      font-size: 1.2rem;
    }
  }

  .hero__coin {
    display: grid;
    grid-template-columns:repeat(5,1fr);
    grid-gap:2rem;
    justify-content:center;
  }
  
  @media screen and (max-width:991px){
    .hero__coin {
    grid-template-columns:repeat(2,1fr);
    }
    #usd-coin{
      display:none;
    }
  }
`;
