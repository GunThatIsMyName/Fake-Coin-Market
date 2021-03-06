import styled from "styled-components";

export const BoxWrapper = styled.main`
  border-top: 1px solid var(--color-grey);
  padding-top: 1rem;

  .box{
    border-right:1px solid var(--color-grey);
  }
  .main {
    position: relative;
    width: 60%;
    min-height:50vh;
    .main__title {
      margin-bottom: 1rem;
      padding: 10px 0;
      font-size: 1.5rem;
      text-align: center;
      border-bottom: 1px solid var(--color-grey);
    }
    .main__homepage {
      font-size: 1.2rem;
      a {
        text-decoration: underline;
        &:hover {
          color: var(--color-grey);
        }
      }
    }
    .main__source__code {
      display: flex;
      flex-wrap:wrap;
      margin:10px 0;
      a {
        color: var(--color-grey);
        text-decoration: underline;
        margin-right: 5px;
      }
    }
    .main__coin__info{
        font-size:1.5rem;
        margin:2rem 0;
        h3{
            margin:5px 0;
        }
    }
    .main__footer {
      margin-top:4rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }

  @media screen and (max-width: 720px) {
    .main {
      width: 100%;
    }
    .box{
    border-right:none;
  }
  }
`;
